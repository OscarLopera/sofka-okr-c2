const KrService = require("../../../../application/okr/useCases/index");
const KrRepositoryMongo = require("../../../repositories/okr/krMongoRepository");
const OkrRepositoryMongo = require("../../../repositories/okr/okrMongoRepository");
const krRepository = new KrRepositoryMongo();
const okrRepository = new OkrRepositoryMongo();

module.exports = async (req, res, next) => {
  const idKr = req.params.id;
  const { body: krVal } = req;
  try {
    const updatedKr = await KrService.updateKrProgressUseCase(
      idKr,
      krVal,
      krRepository,
      okrRepository
    );

    res.status(201).json({
      data: updatedKr,
      message: "Avance de kr actualizado",
    });
  } catch (err) {
    next(err);
  }
};
