const server = require('../server')
const socket = require('socket.io')


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

module.exports = io