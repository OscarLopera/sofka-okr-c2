const { filterUser, userRecommendationByName } = require("../../../../application/calendar/index")
const UserRepositoryMongo = require("../../../repositories/calendar/UserRepository")

const OkrRepositoryMongo = require("../../../repositories/calendar/OkrRepository")

const okrRepository = new OkrRepositoryMongo
const reposi = new UserRepositoryMongo()

const UserRecommendationDTO = require("../../DTO/UserRecommendationDTO")

const filterUsersOkr = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.json([]);
        }

        const filter = await filterUser(id, okrRepository, reposi)
        return res.json(filter)

    } catch (err) {
        throw new Error(err)
    }
    

}


const getUsersByNameRegex = async (req, res) => {
    try {
        const { name } = req.params;
        if (!name) {
            return res.json([]);
        }
        const users = await userRecommendationByName(name,UserRepositoryMongo.prototype)
        const usersDTO= users.map(user => new UserRecommendationDTO(user))
        return res.json(usersDTO)
    }catch(err){
        throw new Error(err)
    }

}


module.exports = {
    filterUsersOkr,
    getUsersByNameRegex
};