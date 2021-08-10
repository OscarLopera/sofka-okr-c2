module.exports = async function updateNotifications(repositoryNotManagerDb, _id, body ) {
  
  let result = await repositoryNotManagerDb.updateNotificationManager(_id, body)
  return result;
};