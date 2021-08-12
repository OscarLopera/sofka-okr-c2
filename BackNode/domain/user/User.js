const {Email,FirstTime,Name,Phone,Rol,UrlPhoto,VerticalId} = require("./objectValues")

class User {
    constructor (id,name,email,urlPhoto,phone,isFirstTime,verticalId,role) {
        this.id = id;
        this.name = Name(name).value;
        this.email = Email(email).value;
        this.urlPhoto = UrlPhoto(urlPhoto).value;
        this.phone = Phone(phone).value;
        this.isFirstTime = FirstTime(isFirstTime).value;
        this.verticalId = VerticalId(verticalId).value;
        this.role = Rol(role).value;
    }

}

module.exports = User
