const deleteOkrUseCase = async (idOkr, okrRepository, krRepository) => {
    const response = await krRepository.deleteKrsByIdOkr(idOkr);
    return await okrRepository.deleteOkr(idOkr);
}


module.exports = deleteOkrUseCase;