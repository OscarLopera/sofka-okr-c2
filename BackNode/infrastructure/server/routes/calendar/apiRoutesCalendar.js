const express = require("express");
const { rawListeners } = require("../../../..");
const validationHandler = require("../../../utils/middleware/validationHandler");

const {filterUsersOkr,getUsersByNameRegex} = require("../../controllers/calendar/calendarController")

function routesApiCalendar(app) {
  const router = express.Router();

  app.use("/api/calendar", router);
  
  router.get("", (req, res) => {
    throw new Error("Ruta calendar");
  });

  router.get("/filterusersokr/:id", filterUsersOkr);
  router.get("/usersbyname/:name",getUsersByNameRegex)

}

module.exports = routesApiCalendar;
