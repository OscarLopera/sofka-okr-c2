const OkrRepository = require("../../../domain/okr/okr/Okr-repository");

class OkrRepositoryMongo extends OkrRepository {
  createOkr(Okr) {
    console.log(Okr);
    throw new Error("Falta definir el repositorio");
  }
}
module.exports = OkrRepositoryMongo;
