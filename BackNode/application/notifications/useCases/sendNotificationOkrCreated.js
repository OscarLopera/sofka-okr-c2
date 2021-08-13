
const sendNotiOkrCreated = async (repositoryNotificationDb, _id) => {
  const notificationManager = await repositoryNotificationDb.findNotificationManagerByUserId(_id)

  return notificationManager
}

module.exports = sendNotiOkrCreated;