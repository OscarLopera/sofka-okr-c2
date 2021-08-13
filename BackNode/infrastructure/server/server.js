const config = require("../config/index");
const app = require("../../index");
const socket = require('socket.io')

app.listen(config.port, () => {
  console.log(`listen at http://localhost:${config.port}`);
});

