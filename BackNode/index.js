const express = require("express");
const cors = require("cors");
const routesApiOkr = require("./infrastructure/server/routes/okr/apiRoutesOkr");
const routesApiCalendar = require("./infrastructure/server/routes/calendar/apiRoutesCalendar");
const routesApiNotifications = require("./infrastructure/server/routes/notifications/apiRoutesNotifications");
const connectDB = require("./infrastructure/database/connection")

const {
  logErrors,
  errorHandler,
} = require("./infrastructure/utils/middleware/error-handler");

connectDB()
const app = express();
app.use(express.json());
app.use(cors());

routesApiOkr(app);
routesApiCalendar(app);
routesApiNotifications(app);

app.use(logErrors);
app.use(errorHandler);

module.exports = app;
