const createOkrController = require("./createOkrController");
const createKrController = require("./CreateKrController");
const deleteKrController = require("./deleteKrController");
const deleteOkrController = require("./deleteOkrController");
const updateKrProgressController = require("./updateKrProgressController");
const getOkrsByuserController = require("./getOkrsByuserController");


module.exports = {
  createOkrController,
  createKrController,
  deleteKrController,
  deleteOkrController,
  updateKrProgressController,
  getOkrsByuserController
};
