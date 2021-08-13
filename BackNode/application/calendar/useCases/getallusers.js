const User = require("../../../domain/user/User")

const getAllUsers = async (UserRepository) => {

    const allusers = await UserRepository.getUsers()

    return allusers.map(user => new User(user._id, user.name, user.email, user.urlPhoto, user.phone,
        user.firstTime, user.verticalId, user.rol))
};

module.exports = getAllUsers