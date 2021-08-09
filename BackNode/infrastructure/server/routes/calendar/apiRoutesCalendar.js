const express = require("express");
const validationHandler = require("../../../utils/middleware/validationHandler");

function routesApiCalendar(app) {
  const router = express.Router();
  app.use("/api/calendar", router);

  router.get("", () => {
    throw new Error("Ruta calendar");
  });
}

module.exports = routesApiCalendar;
