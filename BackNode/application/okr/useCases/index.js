const createOkrUseCase = require("./createOkr");
const createKrUseCase = require("./createKr");
const deleteKrUseCase = require("./deleteKr");
const deleteOkrUseCase = require("./deleteOkr");
const updateKrProgressUseCase = require("./updateProgress");
const getOkrsByUserUseCase = require("./getOkrsByUser");

module.exports = {
  createOkrUseCase,
  createKrUseCase,
  deleteKrUseCase,
  deleteOkrUseCase,
  updateKrProgressUseCase,
  getOkrsByUserUseCase
};
