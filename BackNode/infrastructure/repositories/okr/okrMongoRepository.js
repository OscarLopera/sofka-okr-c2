const OkrRepository = require("../../../domain/okr/okr/Okr-repository");
const OkrSchema = require("../../database/mongo/schemas/OKR");

class OkrRepositoryMongo extends OkrRepository {
  async createOkr(Okr) {
    console.log(Okr);
    const newOkr = new OkrSchema({
      objective: Okr.objective,
      title: Okr.title,
      managerId: Okr.managerId,
      description: Okr.description,
      verticalId: Okr.verticalId,
      currentProgress: Okr.currentProgress,
    });
    const response =await  newOkr.save()
    console.log(response);
  }
}
module.exports = OkrRepositoryMongo;
