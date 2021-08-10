const KrService = require("../../../../application/okr/useCases/index")
const KrRepositoryMongo = require("../../../repositories/okr/KrMongoRepository")
const krRepository = new KrRepositoryMongo

module.exports = async (req, res, next) => {
  const  idKr  = req.params.id;
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