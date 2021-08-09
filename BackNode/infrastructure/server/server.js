const config = require("../config/index");
const app = require("../../index");
const db = require("../database/connection")

app.listen(config.port, () => {
  console.log(`listen at http://localhost:${config.port}`);
});
