const KrRepository = require("../../../domain/okr/kr/KrRepository");
const KrSchema = require("../../database/mongo/schemas/KR");
const {deleteKrUseCase} = require("../../../application/okr/useCases/index");
const { findById } = require("../../database/mongo/schemas/KR");

class KrRepositoryMongo extends KrRepository {
  async createKr(Kr) {
    console.log(Kr);
    const newKr = new KrSchema({
      title: Kr.title,
      idOkr : Kr.idOkr,
      description : Kr.description,
      managerName : Kr.managerName,
      managerEmail : Kr.managerEmail,
      startDate : Kr.startDate,
      endDate : Kr.endDate,
      loadValue : Kr.loadValue,
      progress : Kr.progress,
    });
    const response = await  newKr.save()
    console.log(response);
  }

  async deleteKr(KrId) {
    console.log(KrId)
    const newKr = new KrSchema()

    const response = await newKr.remove(newKr.findById(KrId))
    console.log("response")
    console.log(response)
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