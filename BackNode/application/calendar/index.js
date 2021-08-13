const getalluser = require("./useCases/getallusers")
const filterUser = require("./useCases/filterUser")
const userRecommendationByName = require("./useCases/userRecommendationByName")

module.exports = {
    
    filterUser,
    getalluser,
    userRecommendationByName
}