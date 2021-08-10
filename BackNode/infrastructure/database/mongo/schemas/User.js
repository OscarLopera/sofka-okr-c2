const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({

    name :{
        type: String
    },
    email :{
        type: String
    },
    urlPhoto :{
        type: String
    },
    phone :{
        type: String
    },
    isFirstTime :{
        type: String
    },
    verticalId :{
        type: String
    },
    rol:{
        type: Object
    },

}, {
    versionKey: false,
    collection: 'usuarios'
})


module.exports= mongoose.model('User', UserSchema)
