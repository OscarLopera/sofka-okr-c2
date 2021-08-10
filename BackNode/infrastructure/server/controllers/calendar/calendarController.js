const { filterUser, userRecommendationByName } = require("../../../../application/calendar/index")
const UserRepositoryMongo = require("../../../repositories/calendar/UserRepository")

const OkrRepositoryMongo = require("../../../repositories/calendar/OkrRepository")


const UserRecommendationDTO = require("../../DTO/UserRecommendationDTO")

const filterUsersOkr = async (req, res, next) => {
    try {
        const { id } = req.params;

        const filter = await filterUser(id, OkrRepositoryMongo.prototype, UserRepositoryMongo.prototype)
        return res.status(200).json(filter)

    } catch (err) {
        next(err);
    }
    

}


const getUsersByNameRegex = async (req, res, next) => {
    try {
        const { name } = req.params;
        if (!name) {
            return res.json([]);
        }
        const users = await userRecommendationByName(name,UserRepositoryMongo.prototype)
        const usersDTO= users.map(user => new UserRecommendationDTO(user))
        return res.status(200).json(usersDTO)
    }catch(err){
        next(err)
    }

}


module.exports = {
    filterUsersOkr,
    getUsersByNameRegex
};