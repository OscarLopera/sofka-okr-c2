const express = require("express");
const cors = require("cors");
// const routesApi = require("./routes/api-routes");
const { logErrors, errorHandler } = require("./infrastructure/utils/middleware/error-handler");

const app = express();
app.use(express.json());
app.use(cors());

// routesApi(app);
app.use(logErrors);
app.use(errorHandler);

module.exports = app;
