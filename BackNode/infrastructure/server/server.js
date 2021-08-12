const config = require("../config/index");
const app = require("../../index");



const server = app.listen(config.port, () => {
  console.log(`listen at http://localhost:${config.port}`);
});

module.exports = server