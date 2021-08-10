

class UserRecommendationDTO{
    constructor(user){
        this.name = user.name,
        this.email = user.email,
        this.id = user.id
    }
}

module.exports = UserRecommendationDTO
