const express = require("express");
const validationHandler = require("../../../utils/middleware/validationHandler");
const {updateNotificationManager, createNotificationManager} = require("../../controllers/notifications/NotificationManagerController")

let createNotiManager = createNotificationManager()
let configureNotifications = updateNotificationManager()

function routesApiNotifications(app) {
  const router = express.Router();
  app.use("/api/notifications", router);

  router.post("/", createNotiManager);
  router.patch("/update-configuration/:_id", configureNotifications);
}

module.exports = routesApiNotifications;
