const NotificationManager = require("../../../domain/notifications/notificationManager/NotificationManager")


const createNotiManager = async (repositoryNotificationDb, body) => {
  const notificationManager = new NotificationManager(body.userId, body.mail, body.screen)
  let result = await repositoryNotificationDb.createNotificationManager(notificationManager)
  return result
}

module.exports = createNotiManager;