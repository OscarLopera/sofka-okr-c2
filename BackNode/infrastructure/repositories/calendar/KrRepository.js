const KrRepository = require("../../../domain/okr/kr/KrRepository");
const KrSchema = require("../../database/mongo/schemas/KR");

class OkrRepositoryMongo extends KrRepository {

  async getAllKr() {
    return await KrSchema.find()
  }
  
}
module.exports = OkrRepositoryMongo;
