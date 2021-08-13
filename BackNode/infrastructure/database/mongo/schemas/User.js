const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({

    name :{
        type: String,
        required: [true, 'User`s name is required.'],
        minLength: [1, 'The minimum length of the user`s name is 1 character'],
        lowercase: true
    },
    email :{
        type: String,
        required: [true, 'Email is required.'],
        unique: [true, 'Email must be unique.'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        lowercase: true
    },
    urlPhoto :{
        type: String,
        required: [true, 'Url photo is required.'],
        minLength: [5, 'The minimum length of the url photo is 5 characters'],
        lowercase: true
    },
    phone :{
        type: String,
        required: [true, 'Phone is required.'],
        minLength: [3, 'The minimum length of the phone is 3 characters'],
    },
    firstTime :{
        type: Boolean,
        required: [true, 'Is first time is a boolean and is required'],
    },
    verticalId :{
        type: String,
        required: [true, 'Vertical id is required']
    },
    rol:{
        type: String,
        required: [true, 'Rol is required'],
        minLength: [2, 'The minimum length of user`s role is 2 characters'],
        lowercase: true
    },

}, {
    versionKey: false,
    collection: 'Users'
})

module.exports= mongoose.model('User', UserSchema)
