const User = require("../../../domain/user/User")

 const userRecommendationByName = async (name,UserRepository)=>{
        const limit = 10 
        const users= await UserRepository.getUsersByName(name,limit)

        return users.map(user => new User(user._id,user.name,user.email,user.urlPhoto,user.phone,
            user.isFirstTime,user.verticalId,user.role))
     
}

module.exports = userRecommendationByName