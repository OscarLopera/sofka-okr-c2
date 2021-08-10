const KrService = require("../../../../application/okr/useCases/index")
const KrRepositoryMongo = require("../../../repositories/okr/krMongoRepository")
const krRepository = new KrRepositoryMongo

module.exports = async (req, res, next) => {
  const  idKr  = req.params;
  try {
    const deletedKrId = await KrService.deleteKrUseCase(
      idKr,
      krRepository
    )

    res.status(201).json({
      dataId: deletedKrId,
      message: "kr delete",
    })

  } catch (err) {
    next(err);
  }
};