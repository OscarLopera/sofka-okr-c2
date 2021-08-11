const nodemailer = require("nodemailer")

const createTransport = () => {
  const transport = nodemailer.createTransport({
    service: 'gmail',
        auth: {
            user: 'sofkanotificaciones@gmail.com',
            pass: 'vxhdriuhuifowzvw'
        },
        tls: {
            rejectUnauthorized: false
        }
  })
  return transport
}

const sendMail = async ( message) => {
 
  contentHTML = `
        <h3> Hola</h3>
        <br>
        <h3>${message}</h3>
        <br>
          <h3>#ElDesafioEsContigo</h3>
          <h3>#Team Sofka</h3>
        <br>
          <img src="https://www.sofka.com.co/wp-content/uploads/2020/08/sofka-logo-gradient-white.png" width="130" height="60"/>
          
    `; 
  const transporter =  createTransport()
  const info = await transporter.sendMail({
    from: '"Notification" <sofkanotificaciones@gmail.com>', 
    to: 'luisamariagilgarcia24@gmail.com',
    subject: 'Notifications',
    html: contentHTML
  })
  console.log("Message sent: mensaje enviado ", info.messageId);
} 

exports.sendMail = (message) => sendMail(message)