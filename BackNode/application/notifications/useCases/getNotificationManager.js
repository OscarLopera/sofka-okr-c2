
const getNotificationManager = async (repositoryNotificationDb, _id) => {
  const notificationManager = await repositoryNotificationDb.findNotificationManagerByUserId(_id)
  return notificationManager
}

module.exports = getNotificationManager;