const mongoose = require('mongoose')

const notificationSchema = mongoose.Schema({
   
    idUser:{type:String},
    emailUser:{type:String},
    notifications:[{type:Object}],
          
})

module.exports= mongoose.model('notification', notificationSchema)