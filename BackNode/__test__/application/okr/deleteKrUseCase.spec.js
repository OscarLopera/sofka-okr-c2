const KrRepository = require("../../../domain/okr/kr/KrRepository");
const krFakes = require("./fakes/krFakes");
const krServices = require("../../../application/okr/useCases/index");
const repository = new KrRepository();

describe("delete-kr test", () => {
  beforeAll(() => {
    jest
      .spyOn(repository, "deleteKr")
      .mockImplementation(() => krFakes.krId);
  })
  it("Happypath delete kr succesfully", async () => {
    const newIdKr = krFakes.krId

    //act
    const deletedKrId = await krServices.deleteKrUseCase(newIdKr, repository);
    //assert}
    expect(repository.deleteKr).toHaveBeenCalled();

    expect(deletedKrId).toBe(krFakes.krId);
  })
})