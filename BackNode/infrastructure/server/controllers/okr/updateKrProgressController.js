const KrService = require("../../../../application/okr/useCases/index")
const KrRepositoryMongo = require("../../../repositories/okr/krMongoRepository")
const krRepository = new KrRepositoryMongo

module.exports = async (req, res, next) => {
  const  idKr  = req.params.id;
  const { body: krVal } = req;
  try {
    const updatedKr = await KrService.updateKrProgressUseCase(
      idKr,
      krVal,
      krRepository
    )

    console.log("kr updated", updatedKr );

    res.status(201).json({
      dataId: deletedKrId,
      message: "kr delete",
    })

  } catch (err) {
    next(err);
  }
};