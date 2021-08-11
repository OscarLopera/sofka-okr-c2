const OkrRepository = require("../../../domain/okr/okr/Okr-repository");
const KrRepository = require("../../../domain/okr/kr/KrRepository");
const krFakes = require("./fakes/krFakes");
const okrFakes = require("./fakes/okrFakes");
const krServices = require("../../../application/okr/useCases/index");
const krRepository = new KrRepository();
const okrRepository = new OkrRepository();
const kr = krFakes.createKrMock;
const okr = okrFakes.createOkrMock;
const newIdKr = krFakes.krId;
const krVal = { progress: krFakes.krList[0].progress };

const getDateNow = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    if (month < 10) {
      return `${year}/0${month}/${day}`;
    }
    return `${year}/${month}/${day}`;
  };

const today = getDateNow()

describe("update progress-kr test", () => {
  beforeAll(() => {
    jest.spyOn(krRepository, "updateKr").mockImplementation((idKr, val) => {
      return { ...kr, ...val };
    });
    jest
      .spyOn(krRepository, "getMany")
      .mockImplementation((idOkr) => krFakes.krList);
    jest.spyOn(okrRepository, "updateOkr").mockImplementation((idOkr, val) => {
      const {historicalProgress} = val.$push
      const {currentProgress}= val
      return { ...okr , currentProgress, historicalProgress };
    });
  });
  it("Happypath update kr succesfully", async () => {
    //act
    const updated = await krServices.updateKrProgressUseCase(
      newIdKr,
      krVal,
      krRepository,
      okrRepository
    );
    //assert}
    expect(krRepository.updateKr).toHaveBeenCalled();
    expect(krRepository.getMany).toHaveBeenCalled();
    expect(okrRepository.updateOkr).toHaveBeenCalled();

    expect(updated.updatedKr.progress).toBe(krVal.progress);
    expect(updated.updatedOkr.currentProgress).toBe(krFakes.OkrProgress);
    expect(updated.updatedOkr.currentProgress).toBe(krFakes.OkrProgress);
    expect(updated.updatedOkr.historicalProgress.date).toBe(today);
  });
});
