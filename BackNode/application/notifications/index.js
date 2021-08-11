const createNotiManager = require("./useCases/createNotiManager");
const updateNotifications = require("./useCases/updateNotificationManager")
const getNotificationsManager = require('./useCases/getNotificationManager')
const addNotification = require('./useCases/addNotification')
const addMessage = require('./useCases/createNotification')

module.exports = {
  createNotiManager,
  updateNotifications,
  getNotificationsManager,
  addNotification,
  addMessage
};