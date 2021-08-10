const Okr = require("../../../domain/okr/okr/Okr");

const createOkrUseCase = ( okr,  okrRepository
    ) => {
        const newOkr = new Okr({ ...okr})
      return okrRepository.createOkr(newOkr);
    };
    module.exports = createOkrUseCase; 