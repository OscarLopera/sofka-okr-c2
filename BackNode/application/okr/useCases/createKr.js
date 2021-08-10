const Kr = require("../../../domain/okr/kr/Kr");

const createKrUseCase = async (kr, krRepository) => {
  const newKr = new Kr({ ...kr });
  return await krRepository.createKr(newKr);
};
module.exports = createKrUseCase;