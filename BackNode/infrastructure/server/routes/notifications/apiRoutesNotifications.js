const express = require("express");
const validationHandler = require("../../../utils/middleware/validationHandler");

function routesApiNotifications(app) {
  const router = express.Router();
  app.use("/api/notifications", router);

  router.get("", () => {
    throw new Error("Ruta notifications");
  });
}

module.exports = routesApiNotifications;
