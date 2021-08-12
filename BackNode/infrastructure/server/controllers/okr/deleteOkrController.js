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
            dataId: "No existe Dicho Kr",
            message: "kr not Exist"
        } : {
            dataId: deletedOkr._id,
            message: "kr delete"
        }
        res.status(201).json(response)
    } catch (err) {
        next(err);
    }
}