const KrService = require("../../../../application/okr/useCases/index")
const KrRepositoryMongo = require("../../../repositories/okr/krMongoRepository")
const krRepository = new KrRepositoryMongo

module.exports = async (req, res, next) => {
  const  idKr  = req.params.id;
  try {
    const deletedKrId = await KrService.deleteKrUseCase(
      idKr,
      krRepository
    )

    if (deletedKrId === null){
      res.status(201).json({
        dataId: "No existe Dicho Kr",
        message: "kr not Exist",
      })
    } 
    else{
      res.status(201).json({
        dataId: deletedKrId._id,
        message: "kr delete",
      })
    }

  } catch (err) {
    next(err);
  }
};