
const updateKrProgressUseCase = async (idKr, krVal, krRepository) => {
  return await krRepository.updateKr(idKr, krVal);
};
module.exports = updateKrProgressUseCase;