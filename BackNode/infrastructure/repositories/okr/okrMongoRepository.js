const OkrRepository = require("../../../domain/okr/okr/Okr-repository");
const OkrSchema = require("../../database/mongo/schemas/OKR");

class OkrRepositoryMongo extends OkrRepository {
  async createOkr(Okr) {
    const newOkr = new OkrSchema({
      objective: Okr.objective,
      title: Okr.title,
      managerId: Okr.managerId,
      description: Okr.description,
      verticalId: Okr.verticalId,
      currentProgress: Okr.currentProgress,
    });
    const response = await newOkr.save();
    return response._id;
  }
  async updateOkr(idOkr, okrVal) {
    const updatedOkr = await OkrSchema.findByIdAndUpdate({ _id: idOkr }, okrVal, { new: true })
    return updatedOkr;
  }

  async deleteOkr(OkrId) {
    return await OkrSchema.findByIdAndDelete({ _id: OkrId })
  }
  async getAllOkr(userId) {
    return await OkrSchema.find({ managerId : userId })
  }
  
}
module.exports = OkrRepositoryMongo;
