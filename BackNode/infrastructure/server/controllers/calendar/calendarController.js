const {filterUser, userRecommendation} = require("../../../../application/calendar/index")

const filterUsersOkr = async (req, res) => {
    const { id } = req.params;
    const filter = await filterUser(id)
    return res.json(filter)
}


module.exports = {
    filterUsersOkr
};