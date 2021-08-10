const  UserRepository = require ("../../../domain/user/UserRepository")
const UserSchema = require("../../database/mongo/schemas/User")


class UserRepositoryMongo extends UserRepository{

    async getUsersByName(name,limit){
        const nameRegex = new RegExp(name)
        return await UserSchema.find({name: {$regex: nameRegex, $options: 'i'}}).limit(limit)
    }

}

module.exports = UserRepositoryMongo