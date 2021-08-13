const {Email,FirstTime,Name,Phone,Rol,UrlPhoto,VerticalId} = require("./objectValues")

class User {
    constructor (id,name,email,urlPhoto,phone,firstTime,verticalId,rol) {
        this.id = id;
        this.name = Name(name).value;
        this.email = Email(email).value;
        this.urlPhoto = UrlPhoto(urlPhoto).value;
        this.phone = Phone(phone).value;
        this.firstTime = FirstTime(firstTime).value;
        this.verticalId = VerticalId(verticalId).value;
        this.rol = Rol(rol).value;
    }

}

module.exports = User
