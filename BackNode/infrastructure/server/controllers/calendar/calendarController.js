const {filterUser,userRecommendationByName} = require("../../../../application/calendar/index")
const UserRepositoryMongo = require("../../../repositories/calendar/UserRepository")
const UserRecommendationDTO = require("../../DTO/UserRecommendationDTO")


const filterUsersOkr = async (req, res) => {
    const { id } = req.params;
    const filter = await filterUser(id)
    return res.json(filter)
}


const getUsersByNameRegex = async (req, res) => {
    try{
        const {name} = req.params;
        if(!name){
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