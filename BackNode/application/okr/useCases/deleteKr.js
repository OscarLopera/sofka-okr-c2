const deleteKrUseCase = async (idKr, krRepository) => {
  console.log(idKr)
  return await krRepository.deleteKr(idKr);
};
module.exports = deleteKrUseCase;