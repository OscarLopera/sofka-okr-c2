const OkrService = require('../../../../application/okr/useCases/index')
const OkrRepositoryMongo = require('../../../repositories/okr/okrMongoRepository')
const KrRepositoryMongo = require('../../../repositories/okr/krMongoRepository')
const okrRepository = new OkrRepositoryMongo()
const krRepository = new KrRepositoryMongo()

module.exports = async (req, res, next) => {
    const idOkr = req.params.id;
    try {
        const deletedOkr = await OkrService.deleteOkrUseCase(idOkr, okrRepository, krRepository);
        const response = (deletedOkr === null) ? {
            dataId: "No existe Dicho Okr",
            message: "Okr not Exist"
        } : {
            dataId: deletedOkr._id,
            message: "Okr Eliminado"
        }
        res.status(201).json(response)
    } catch (err) {
        next(err);
    }
}