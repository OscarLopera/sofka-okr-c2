'use strict';

class Notification {
    constructor (id,idUser, emailUser,notifications){
        this.id = id;
        this.idUser = idUser;
        this.emailUser = emailUser;
        this.notifications=notifications;
    
    };
}

module.exports = Notification;
