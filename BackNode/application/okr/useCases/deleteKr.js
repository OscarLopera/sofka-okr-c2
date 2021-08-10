const deleteKrUseCase = async (idKr, krRepository) => {
  return await krRepository.deleteKr(idKr);
};
module.exports = deleteKrUseCase;