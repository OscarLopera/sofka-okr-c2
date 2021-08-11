const config = require("../config/index");
const app = require("../../index");



app.listen(config.port, () => {
  console.log(`listen at http://localhost:${config.port}`);
});