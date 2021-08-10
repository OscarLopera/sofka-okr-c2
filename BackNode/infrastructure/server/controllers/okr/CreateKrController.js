const KrService = require("../../../../application/okr/useCases/index")
const KrRepositoryMongo = require("../../../repositories/okr/krMongoRepository")
const krRepository = new KrRepositoryMongo

module.exports = async (req, res, next) => {
  const { body: kr } = req;
  try {
    const createdKrId = await KrService.createKrUseCase(
      kr,
      krRepository
    )

    res.status(201).json({
      dataId: createdKrId,
      message: "kr created",
    })

  } catch (err) {
    next(err);
  }
};