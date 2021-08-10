const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationManagerSchema = new Schema({
    userId: { type: String, required: true},
    mail: { type: Object, required: true},
    screen: { type: Object, required: true}
});

const notificationManager = mongoose.model('NotificationManager', NotificationManagerSchema);

module.exports = notificationManager;