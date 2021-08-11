const KrRepository = require("../../../domain/okr/kr/KrRepository");
const KrSchema = require("../../database/mongo/schemas/KR");
const {deleteKrUseCase} = require("../../../application/okr/useCases/index");

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
    return response._id;
  }

  async deleteKr(KrId) {
    console.log(KrId)
    const Kr = new KrSchema()

    const response = await KrSchema.deleteOne({_id:KrId})
    console.log("response")
    console.log(response)
  }

  async getAllKrs() {
    return CrudMongoRepository.getAll(collection);
  }

  async updateKr(idKr, krVal) {
    const updatedKr = await KrSchema.findByIdAndUpdate({_id:idKr},krVal,{new: true})
    return updatedKr;
  }

  async getMany(value) {
    return await KrSchema.find(value)
  }

}

module.exports = KrRepositoryMongo;