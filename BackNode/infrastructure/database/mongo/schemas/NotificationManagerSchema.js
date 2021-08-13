const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationManagerSchema = new Schema({
    userId: { type: String, required: true},
    mail: { type: Object, default:{
     Crear_Okr: true,
	   Eliminar_Okr:  true,
	   Finalizar_Okr: true,
	   Asignar_Okr:  true,
		 Reunion_Asignada: true,
		 Reunion_Cancelada: true,
    }},
    screen: { type: Object, default:{
			Crear_Okr: true,
			Eliminar_Okr:  true,
			Finalizar_Okr: true,
			Asignar_Okr:  true,
			Reunion_Asignada: true,
			Reunion_Cancelada: true,
    }}
});

const notificationManager = mongoose.model('NotificationManager', NotificationManagerSchema);

module.exports = notificationManager;