const mongoose = require('mongoose')


const KRSchema = mongoose.Schema({

    idOkr :{
        type: String
    },
    descripcion :{
        type: String
    },
    managerName :{
        type: String
    },
    managerEmail :{
        type: String
    },
    startDate :{
        type: String
    },
    endDate :{
        type: String
    },
    loadValue :{
        type: String
    },
    progress :{
        type: String
    },
    krs :{
        type: Array
    },
}, {
    versionKey: false,
    collection: 'krs'
})


module.exports= mongoose.model('KR', KRSchema)
