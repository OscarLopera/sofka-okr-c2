const express = require("express");
const validationHandler = require("../../../utils/middleware/validationHandler");

function routesApiOkr(app) {
  const router = express.Router();
  app.use("/api/okr", router);

  router.get("", () => {
    throw new Error("Ruta okr");
  });
}

module.exports = routesApiOkr;
