const UserRepository = require("../../../domain/user/UserRepository")
const UserSchema = require("../../database/mongo/schemas/User")


class UserRepositoryMongo extends UserRepository {

    async getUsersByName(name, limit) {
        const nameRegex = new RegExp(name)
        const test = await UserSchema.find({ name: { $regex: nameRegex, $options: 'i' } }).limit(limit)
        console.log("TEST AAAAA => "+test)
        return test
    }

    async getUsers() {
        return await UserSchema.find()
    }

    async getUsersByEmail(emailOkr) {
        return await UserSchema.find({ email: { $in: emailOkr } })
    }

    async getUsersById(managerOkrsId) {
        return await UserSchema.find({ _id: { $in: managerOkrsId } })
    }
}

module.exports = UserRepositoryMongo