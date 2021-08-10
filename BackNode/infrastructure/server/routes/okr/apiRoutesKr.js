const express = require("express");
const validationHandler = require("../../../utils/middleware/validationHandler");
//const krSchemas = require("../../../utils/schemas/okr/krScheme");
const krControllers = require('../../controllers/okr/index')

function routesApiKr(app) {
  const router = express.Router();
  app.use("/api/kr", router);
  
  router.post(
    "/new",
    /*validationHandler(krSchemas.createkrSchema),*/
    async (req, res, next) =>
      await krControllers.createKrController(req, res, next)
  );
  router.delete(
    "/delete/:id",
    /*validationHandler(krSchemas.createkrSchema),*/
    async (req, res, next) =>{
      await krControllers.deleteKrController(req, res, next)}
  );

}

module.exports = routesApiKr;