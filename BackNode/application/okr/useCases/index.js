const createOkrUseCase = require("./createOkr");
const createKrUseCase = require("./createKr");
const deleteKrUseCase = require("./deleteKr");
const deleteOkrUseCase = require("./deleteOkr");
const updateKrProgressUseCase = require("./updateProgress");

module.exports = {
  createOkrUseCase,
  createKrUseCase,
  deleteKrUseCase,
  deleteOkrUseCase,
  updateKrProgressUseCase,
};
