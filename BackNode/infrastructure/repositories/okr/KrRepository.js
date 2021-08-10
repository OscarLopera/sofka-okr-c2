const KrRepository = require("../../../domain/okr/kr/KrRepository");
const CrudMongoRepository = require("../../database/mongo/schemas/CrudRepository");

const collection = "KR";

class KrRepositoryMongo extends KrRepository {
  constructor() {
    super();
  }

  async createKr(Kr) {
    return CrudMongoRepository.create(collection, Kr);
  }

  async deleteKr(KrId) {
    return CrudMongoRepository.remove(collection, KrId);
  }

  async getAllKrs() {
    return CrudMongoRepository.getAll(collection);
  }

  async updateKr(KrId, KrData) {
    return CrudMongoRepository.update(collection, KrId, KrData);
  }

  async getByKrId(KrId) {
    return CrudMongoRepository.getById(collection, KrId);
  }

}

module.exports = KrRepositoryMongo;