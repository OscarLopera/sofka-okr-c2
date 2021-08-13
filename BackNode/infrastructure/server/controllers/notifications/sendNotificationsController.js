const RepositoryNotiManagerDb = require('../../../repositories/notifications/repositoryNotiManagerDb')
const {  createNotiManager, updateNotifications, getNotificationsManager, getNotificationUser, sendNotiOkrCreated} = require('../../../../application/notifications/index')
const emailer = require('../../../utils/nodemailerConfig/mailTransport');
const mongoNotificationRepository = require ('../../../repositories/notifications/mongoNotificationRepository')



const repositoryNotiManagerDb = new RepositoryNotiManagerDb();

function sendNewOkr(){
  return async (req,res)=>{
    try{
      const id = req.params._id
      
      const notificationManager = await getNotificationsManager(repositoryNotiManagerDb, id)
      const newNotification = await getNotificationUser(mongoNotificationRepository.prototype, id);
      

      if(notificationManager.mail.OkrCreated === true){
        let message = {
          "message": "se ha creado un nuevo OKR",
          "emailUser": newNotification.emailUser
        };
        emailer.sendMail(message);
      }

      let screenNoti = false

      if(notificationManager.screen.OkrCreated === true){
        screenNoti = true
      }

      res.send(saveNotification,{
        screen : screenNoti,
        message: "se ha creado un nuevo OKR"
      })
    }catch(error){
      res.status(400).send(error)
    }
  }
}

function findNotiUser(){
  return async (req,res)=>{
      try{
          const id = req.params.id;
          const newNotification = await getNotificationUser(mongoNotificationRepository.prototype, id);
          res.send(newNotification)
      }catch(error){
          res.status(500).send(error);
      }
  }
}

module.exports = { sendNewOkr, findNotiUser };