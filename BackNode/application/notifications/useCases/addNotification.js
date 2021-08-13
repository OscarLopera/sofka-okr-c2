const notification = require('../../../domain/notifications/notification')

const addNotification = async (idUser, emailUser, notifications, notificationRepository) => {
    const notifica = new notification(null,idUser, emailUser,notifications)
    let result = await notificationRepository.save(notifica)
    return result
}

module.exports = addNotification