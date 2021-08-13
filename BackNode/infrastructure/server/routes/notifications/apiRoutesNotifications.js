const express = require("express");
const validationHandler = require("../../../utils/middleware/validationHandler");
const {updateNotificationManager, createNotificationManager, getNotificationManager} = require("../../controllers/notifications/NotificationManagerController")
const {createNotification, newMessageController} = require('../../controllers/notifications/notificationController');
const { sendNewOkr, findNotiUser} = require("../../controllers/notifications/sendNotificationsController")
let createNotiManager = createNotificationManager()
let configureNotifications = updateNotificationManager()
let getNotificationManagerCont = getNotificationManager()
let sendNotiNewOkr = sendNewOkr()
let sendUserNoti = findNotiUser()

function routesApiNotifications(app) {
  const router = express.Router();
  app.use("/api/notifications", router);

  router.post("/", createNotiManager);
  router.patch("/update-configuration/:_id", configureNotifications);
  router.get('/:_id', getNotificationManagerCont)
  router.get('/newOkr/:_id', sendNotiNewOkr)

  router.post('/notification', createNotification)
  router.put('/notification/:id', newMessageController)
  router.get('/notificationUser/:id', sendUserNoti)
}

module.exports = routesApiNotifications;

