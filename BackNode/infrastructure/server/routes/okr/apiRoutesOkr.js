const express = require("express");
const validationHandler = require("../../../utils/middleware/validationHandler");
const okrSchemas = require("../../../utils/schemas/okr/okrSchemas");
const okrControllers = require("../../controllers/okr/index")

function routesApiOkr(app) {
  const router = express.Router();
  app.use("/api/okr", router);

  router.post(
    "/new",
    validationHandler(okrSchemas.createOkrSchema),
    async (req, res, next) =>
      await okrControllers.createOkrController(req, res, next)
  );

  router.delete(
    "/delete/:id",
    async (req, res, next) => {
      await okrControllers.deleteOkrController(req, res, next);
    })
    router.get(
      "/allokrsbyuser/:id",
      async (req, res, next) => {
        await okrControllers.getOkrsByuserController(req, res, next);
      })
}

module.exports = routesApiOkr;