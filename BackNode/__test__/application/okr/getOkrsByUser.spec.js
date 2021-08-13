const KrRepository = require("../../../domain/okr/kr/KrRepository");
const OkrRepository = require("../../../domain/okr/okr/Okr-repository");
const services = require("../../../application/okr/useCases/index");
const krFakes = require("./fakes/krFakes");
const okrFakes = require("./fakes/okrFakes");

const krRepository = new KrRepository();
const okrRepository = new OkrRepository();

const okrFull = okrFakes.okrFull;
const idUser = krFakes.userId;

describe('get-okrs-by-user-test', () => {
    beforeAll(() => {
        jest
            .spyOn(okrRepository, 'getAllOkr')
            .mockImplementation(idUser => okrFakes.okrList)

        jest
            .spyOn(krRepository, 'getAllKrs')
            .mockImplementation(okrId => krFakes.krList)

    })



    it('HappyPath get Okr ', async () => {

        //act
        const userOkrWKrs = await services.getOkrsByUserUseCase(idUser, okrRepository, krRepository);

        //assert
        expect(okrRepository.getAllOkr).toHaveBeenCalled();
        expect(krRepository.getAllKrs).toHaveBeenCalled();
        expect(userOkrWKrs).toStrictEqual(okrFull);
    })


})