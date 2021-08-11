const express = require("express");
const validationHandler = require("../../../utils/middleware/validationHandler");
const {updateNotificationManager, createNotificationManager, getNotificationManager} = require("../../controllers/notifications/NotificationManagerController")

let createNotiManager = createNotificationManager()
let configureNotifications = updateNotificationManager()
const getNotificationManagerCont = getNotificationManager()

function routesApiNotifications(app) {
  const router = express.Router();
  app.use("/api/notifications", router);

  router.post("/", createNotiManager);
  router.patch("/update-configuration/:_id", configureNotifications);
  router.get('/:_id', getNotificationManagerCont)
}

module.exports = routesApiNotifications;
