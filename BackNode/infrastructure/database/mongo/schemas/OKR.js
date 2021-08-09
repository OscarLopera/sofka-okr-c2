const mongoose = require('mongoose')


const OkRSchema = mongoose.Schema({

    objetctive :{
        type: String
    },
    title :{
        type: String
    },
    managerId :{
        type: String
    },
    description :{
        type: String
    },
    verticalId :{
        type: String
    },
    currentProgress :{
        type: String
    },
    historicalProgress :{
        type: Object
    },

}, {
    versionKey: false,
    collection: 'okrs'
})


module.exports= mongoose.model('OKR', OkRSchema)
