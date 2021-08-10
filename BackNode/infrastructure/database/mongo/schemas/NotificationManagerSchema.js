const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationManagerSchema = new Schema({
    userId: { type: String, required: true},
    mail: { type: Object, default:{
        OkrCreated: true,
	   KrCreated:  true,
	   OkrUpdated: true,
	   KrUpdated:  true,
	   OkrFinished:true,
	   KrFinished: true,
	   OkrExpired: true,
	   KrExpired:  true,
	   OkrAssigned:true,
	   KrAssigned: true,
	   OkrDeleted: true,
	   krDeleted:  true
    }},
    screen: { type: Object, default:{
        OkrCreated: true,
	   KrCreated:  true,
	   OkrUpdated: true,
	   KrUpdated:  true,
	   OkrFinished:true,
	   KrFinished: true,
	   OkrExpired: true,
	   KrExpired:  true,
	   OkrAssigned:true,
	   KrAssigned: true,
	   OkrDeleted: true,
	   krDeleted:  true
    }}
});

const notificationManager = mongoose.model('NotificationManager', NotificationManagerSchema);

module.exports = notificationManager;