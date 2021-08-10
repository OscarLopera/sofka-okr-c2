const OkrRepository = require("../../../domain/okr/okr/Okr-repository");
const OkrSchema = require("../../database/mongo/schemas/OKR");

class OkrRepositoryMongo extends OkrRepository {
  
  async getOkrByid(id) {
    return await OkrSchema.findById(id)
  }

}
module.exports = OkrRepositoryMongo;
