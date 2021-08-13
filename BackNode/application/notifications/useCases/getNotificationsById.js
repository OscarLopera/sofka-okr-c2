module.exports = async function getNotificationsById(_id,repositoryNotManagerDb) {
  
    let result = await repositoryNotManagerDb.getAllNotificationsById(_id)
    return result;
  };