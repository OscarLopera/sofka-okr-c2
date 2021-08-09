const {Email,FirstTime,Name,Phone,Rol,UrlPhoto,VerticalId} = require("./objectValues")

class User {
    constructor (id,name,email,ulPhoto,phone,isFitstTime,verticalId,role) {
        this.id = id;
        this.name = Name(name).value;
        this.email = Email(email).value;
        this.ulPhoto = UrlPhoto(ulPhoto).value;
        this.phone = Phone(phone).value;
        this.isFirstTime = FirstTime(isFitstTime).value;
        this.verticalId = VerticalId(verticalId).value;
        this.role = Rol(role).value;
    }
}

module.exports = User
