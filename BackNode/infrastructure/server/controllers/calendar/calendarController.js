const { filterUser, userRecommendationByName, getalluser} = require("../../../../application/calendar/index")
const UserRepositoryMongo = require("../../../repositories/calendar/UserRepository")
const OkrRepositoryMongo = require("../../../repositories/calendar/OkrRepository")
const KrRepositoryMongo = require("../../../repositories/calendar/KrRepository")

const { UserRecommendationDTO, UserFilterDTO } = require("../../DTO/")

const filterUsersOkr = async (req, res, next) => {
    try {
        const { id } = req.params;

        const filter = await filterUser(id, OkrRepositoryMongo.prototype, KrRepositoryMongo.prototype, UserRepositoryMongo.prototype)

        const filterDTO = filter.map(user => new UserFilterDTO(user))
        return res.status(200).json(filterDTO)

    } catch (err) {
        next(err);
    }

}

const getUsersByNameRegex = async (req, res, next) => {
    try {
        const { name } = req.params;

        const users = await userRecommendationByName(name, UserRepositoryMongo.prototype)
        const usersDTO = users.map(user => new UserRecommendationDTO(user))
        return res.status(200).json(usersDTO)
    } catch (err) {
        next(err)
    }

}

const getallusers = async (req, res, next) => {
    try {
        const users = await getalluser(UserRepositoryMongo.prototype)
        const usersDTO = users.map(user => new UserRecommendationDTO(user))
        return res.status(200).json(usersDTO)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getallusers,
    filterUsersOkr,
    getUsersByNameRegex
};