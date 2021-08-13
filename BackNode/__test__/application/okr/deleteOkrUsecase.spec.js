const KrRepository = require("../../../domain/okr/kr/KrRepository");
const OkrRepository = require("../../../domain/okr/okr/Okr-repository");
const krFakes = require("./fakes/krFakes");
const okrFakes = require("./fakes/okrFakes");
const services = require("../../../application/okr/useCases/index");

const krRepository = new KrRepository();
const okrRepository = new OkrRepository();

const idOkr = okrFakes.okrId;
const idKr = krFakes.krId;

describe('delete-okr-test', () => {
    beforeAll(() => {
        jest
            .spyOn(okrRepository, 'deleteOkr')
            .mockImplementation(idOkr => okrFakes.okrId)

        jest
            .spyOn(krRepository, 'deleteKrsByIdOkr')
            .mockImplementation(idKr => krFakes.krList)
    })

    it('HappyPath delete Okr successfully', async () => {

        //act
        const deletedOkr = await services.deleteOkrUseCase(idOkr, okrRepository, krRepository)

        //assert
        expect(okrRepository.deleteOkr).toHaveBeenCalled();
        expect(krRepository.deleteKrsByIdOkr).toHaveBeenCalled();

        expect(deletedOkr).toBe(idOkr);

    });

});