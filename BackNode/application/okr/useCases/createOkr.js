const Okr = require("../../../domain/okr/okr/Okr");

const createOkrUseCase = async (okr, okrRepository) => {
  const newOkr = new Okr({ ...okr });
  return await okrRepository.createOkr(newOkr);
};
module.exports = createOkrUseCase;
