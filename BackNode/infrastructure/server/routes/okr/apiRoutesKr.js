const express = require("express");
const validationHandler = require("../../../utils/middleware/validationHandler");
const krsControllers = require('../../controllers/okr/CreateKrController')

function routesApiOkr(app) {
  const router = express.Router();
  app.use("/api/kr", router);
  
  router.post(
    "/create",
    /*validationHandler(animalSchemas.createAnimalSchema),*/
    async (req, res, next) =>
      await krsControllers.createKr(req, res, next)
  );
}

module.exports = routesApiOkr;