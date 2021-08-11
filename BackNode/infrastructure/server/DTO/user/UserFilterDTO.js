

class UserFilterDTO{
    constructor(user){
        this.name = user.name,
        this.email = user.email,
        this.phone = user.phone,
        this.id = user.id
    }
}

module.exports = UserFilterDTO
