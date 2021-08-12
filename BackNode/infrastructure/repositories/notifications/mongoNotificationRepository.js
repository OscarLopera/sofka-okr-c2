const notificationRepository = require('../../../domain/notifications/notificationRepository');
const notificationSchema = require('../../database/mongo/schemas/notificationSchema')
const notification = require('../../../domain/notifications/notification');

module.exports = class extends notificationRepository{

    constructor(){
        super();
    }

    async save(notificationEntity){
        const {idUser, emailUser, notifications,message} = notificationEntity
        const mongooseNotification = new notificationSchema({idUser, emailUser, notifications, message})
        await mongooseNotification.save()
        return new notification( mongooseNotification._id, mongooseNotification.idUser,mongooseNotification.emailUser,mongooseNotification.notifications, mongooseNotification.message )
    }

    async updateNotification(idUser, message){
        
        const newMessage = await notificationSchema.findOne({idUser:idUser},
        function(err,doc){
            if(err){
                return("Este usuario no existe")
            }
            if(message){
                doc.notifications.push(message)
            }
            doc.save()
        })
        return newMessage
    }

    async getAllNotificationsById(idUser){
        const notifications = await notificationSchema.findOne({idUser:idUser})
        if(!notifications){
            return('este usuario no existe')
        }
        return notifications.notifications
    }
     
}