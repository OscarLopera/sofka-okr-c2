const OkrService = require('../../../../application/okr/useCases/index')
const OkrRepositoryMongo = require('../../../repositories/okr/okrMongoRepository')
const KrRepositoryMongo = require('../../../repositories/okr/krMongoRepository')
const okrRepository = new OkrRepositoryMongo()
const krRepository = new KrRepositoryMongo()

module.exports = async (req, res, next) => {
    const userId = req.params.id;
    try {
        const okrsByUser = await OkrService.getOkrsByUserUseCase(userId, okrRepository, krRepository);
        const response = (okrsByUser === null) ? {
            dataId: "No existe",
            message: "Este usuario no tiene Okrs asignados"
        } : {
            data: okrsByUser,
            message: "Okrs de usuario con sus krs listado"
        }
        res.status(200).json(response)
    } catch (err) {
        next(err);
    }
}