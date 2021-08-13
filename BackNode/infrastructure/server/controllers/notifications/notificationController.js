const { addMessage, addNotification, getNotificationUser} = require('../../../../application/notifications/index')
const emailer = require('../../../utils/nodemailerConfig/mailTransport');
const mongoNotificationRepository = require ('../../../repositories/notifications/mongoNotificationRepository')


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
        const newNotification = await addMessage (id, message, mongoNotificationRepository.prototype)
        res.send("Actualiz")
        emailer.sendMail(message)
    }catch(error){
        res.status(500).send(error);
    }
}

module.exports ={createNotification, newMessageController}
