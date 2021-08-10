const OkrService = require("../../../../application/okr/useCases/index");
const OkrRepositoryMongo = require("../../../repositories/okr/okrMongoRepository");
const okrRepository = new OkrRepositoryMongo

module.exports = async (req, res, next) => {
  const { body: okr } = req;
  try {
      console.log("Metodo Post")
    const createdOkrId = await OkrService.createOkrUseCase(
      okr,
      okrRepository
    );
    res.status(201).json({
      dataId: createdOkrId,
      message: "Se creó el Okr exitosamente",
    });
  } catch (err) {
    next(err);
  }
};
