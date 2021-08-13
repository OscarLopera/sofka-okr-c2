
const { addMessage, addNotification, getNotificationsById,getNotificationUser} = require('../../../../application/notifications/index')

const emailer = require('../../../utils/nodemailerConfig/mailTransport');
const mongoNotificationRepository = require ('../../../repositories/notifications/mongoNotificationRepository');
const notiRepo = require('../../../repositories/notifications/repositoryNotiManagerDb')
const getNotificationManager = require('../../../../application/notifications/useCases/getNotificationManager');


async function createNotification (req,res){
    try{
        const {idUser, emailUser, notifications}=req.body
        let notification=await addNotification(idUser, emailUser, notifications, mongoNotificationRepository.prototype)
        res.json(notification)
        
    }catch(error){
        res.status(500).send(error);
    }
}

async function newMessageController(req,res){
    try{
        const id =req.params.id
        const message = req.body.message
        const notiType = req.body.notisType
        const newNotification = await addMessage (id, message, mongoNotificationRepository.prototype)
        const getNotimanager = await getNotificationManager(notiRepo.prototype, id)
        console.log(getNotimanager.mail[notiType])
        if(getNotimanager.mail[notiType]){
            emailer.sendMail((req.body.userEmail),message)
        }
        res.send({
            screen:getNotimanager.screen[notiType]
        })
        
    }catch(error){
        res.status(500).send(error);
    }
}

async function getAllNotificationsByUserId(req,res){
    try{
        const id = req.params.id
        
        const notifications = await getNotificationsById(id, mongoNotificationRepository.prototype)
        res.send(notifications)
    }catch(error){
        res.status(500).send(error)
    }
}
module.exports ={createNotification, newMessageController, getAllNotificationsByUserId}
