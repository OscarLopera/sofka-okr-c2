const message = require('../../../domain/notifications/message')

module.exports = async function addMessage ( idUser, messageNoti,  notificationRepository){
   
    var objFecha = new Date();
    var day  = objFecha.getDate();
    var Month  = objFecha.getMonth();
    var year = objFecha.getFullYear();
    const date = ( day + "/" + Month + "/" + year );

    const newMessage = new message(messageNoti, date)
    let newNoti = await notificationRepository.updateNotification(idUser, newMessage)
    return newNoti
}

