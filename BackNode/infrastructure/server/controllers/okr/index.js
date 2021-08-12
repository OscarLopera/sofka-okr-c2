const createOkrController = require("./createOkrController");
const createKrController = require("./createKrController");
const deleteKrController = require("./deleteKrController");
const deleteOkrController = require("./deleteOkrController");
const updateKrProgressController = require("./updateKrProgressController");

console.log("llego al index")

module.exports = {
  createOkrController,
  createKrController,
  deleteKrController,
  deleteOkrController,
  updateKrProgressController,
};
