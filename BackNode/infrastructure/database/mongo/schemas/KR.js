const mongoose = require('mongoose')


const KRSchema = mongoose.Schema({
    
    title: {
        type: String,
        required: [true, "El titulo es requerido"],
    },
    idOkr :{
        type: String,
        required: [true, "El idOkr es requerido"],
    },
    description :{
        type: String,
        required: [true, "La descripcion es requerida"],
    },
    managerName :{
        type: String,
        required: [true, "El nombre de usuario responsable es requerido"],
    },
    managerEmail :{
        type: String,
        required: [true, "El email del usuario responsable es requerido"],
    },
    startDate :{
        type: String,
        required: [true, "La fecha de inicio es requerida"],
    },
    endDate :{
        type: String,
        required: [true, "La fecha de fin es requerida"],
    },
    loadValue :{
        type: Number,
        required: [true, "El peso % de este Kr para el Okr es requerido"],
    },
    progress :{
        type: Number,
        required: [true, "El progreso es requerido"],
    },
}, {
    versionKey: false,
    collection: 'Krs'
})


module.exports= mongoose.model('KR', KRSchema)
