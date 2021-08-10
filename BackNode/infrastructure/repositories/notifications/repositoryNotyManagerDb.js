const RepositoryNotificationManager = require("../../../domain/notifications/notificationManager/repositoryNotificationManager");
const NotificationManager = require("../../database/mongo/schemas/NotificationManagerSchema");


class RepositoryNotiManagerDb extends RepositoryNotificationManager{
    constructor(){
      super()
    }
    async createNotificationManager(notificationManager){
      
      let validation = await NotificationManager.findOne({userId: notificationManager.userId})

      let result = validation => {
        if(validation === null){
          let notifiManager = new NotificationManager({
            userId:     notificationManager.userId,
            mail:       notificationManager.mail,
            screen:     notificationManager.screen,
          });
          
          let result = notifiManager.save() 
          return result
        }
      }
      return result(validation)
    }

};

module.exports = RepositoryNotiManagerDb;