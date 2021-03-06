const RepositoryNotiManagerDb = require('../../../repositories/notifications/repositoryNotiManagerDb')
const {  createNotiManager, updateNotifications, getNotificationsManager} = require('../../../../application/notifications/index')
const { schema, UpdateSchema } = require("../../../utils/schemas/notifications/notificationManager")


const repositoryNotiManagerDb = new RepositoryNotiManagerDb();


function createNotificationManager(){
    return async (req,res) => {
        try{
            const body = req.body

            const {error, value} = schema.validate({ 
                userId :        body.userId
              });
              if(!error){
                let result = await createNotiManager(repositoryNotiManagerDb, body)
                if(!result){
                    res.status(400).json({
                        error: "Error al crear el notification manager"
                    })
                }
                res.send(result)
              }else{
                res.status(400).json({
                  err: error
                })
              }
        }catch(error){
            res.send(error)
        }
    }
}
function updateNotificationManager(){
  return async (req,res) => {
      try{
          const id = req.params._id
          const body = req.body

          const {error, value} = UpdateSchema.validate({ 
              //userId :        body.userId,
              mail:           body.mail,
              screen:         body.screen,
            });
            if(!error){
              let result = await updateNotifications(repositoryNotiManagerDb, id, body)
              if(!result){
                  res.status(400).json({
                      error: "El ID del Notification Manager ingresado no existe"
                  })
              }
              res.send(result)
            }else{
              res.status(400).json({
                err: error
              })
            }
      }catch(error){
          res.send(error)
      }
  }
}

function getNotificationManager(){
  return async (req,res)=>{
    try{
      const id = req.params._id
      
      const notificationManager = await getNotificationsManager(repositoryNotiManagerDb, id)

      res.send(notificationManager)
    }catch(error){
      res.status(400).send(error)
    }
  }
}

module.exports = { updateNotificationManager, createNotificationManager, getNotificationManager };