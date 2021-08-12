const config = require("../config/index");
const app = require("../../index");
const socket = require('socket.io')


const server = app.listen(config.port, () => {
  console.log(`listen at http://localhost:${config.port}`);
});
const io = socket(server,{
  cors: {
    origin: '*',
  }
});
io.on("connection", (socket)=>{
  console.log("conectado")
  socket.on("actualizar-notis",(data)=>{
      io.sockets.emit((data.id),`${data.manager} se han actualizado tus preferencias de notificaciones`)
  })
})


module.exports = server