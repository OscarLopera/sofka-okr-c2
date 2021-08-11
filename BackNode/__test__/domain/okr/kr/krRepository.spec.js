const KrRepository = require("../../../../domain/okr/kr/KrRepository");
const krRepository = new KrRepository();

describe("repository methods (not implemented) Kr", () => {
  it("create kr", () => {
    try {
        krRepository.createKr()
    } catch (e) {
      expect(e).toEqual(new Error("Error metodo createKr no implemenado"));
    }
    expect.hasAssertions();
  });
  it("delete kr", () => {
    try {
        krRepository.deleteKr()
    } catch (e) {
      expect(e).toEqual(new Error("Error metodo deleteKr no implemenado"));
    }
    expect.hasAssertions();
  });
  it("getAll kr", () => {
    try {
        krRepository.getAllKr()
    } catch (e) {
      expect(e).toEqual(new Error("Error metodo getAllKr no implemenado"));
    }
    expect.hasAssertions();
  });
  it("update kr", () => {
    try {
        krRepository.updateKr()
    } catch (e) {
      expect(e).toEqual(new Error("Error metodo updateKr no implemenado"));
    }
    expect.hasAssertions();
  });
  it("getBy KrId ", () => {
    try {
        krRepository.getByKrId()
    } catch (e) {
      expect(e).toEqual(new Error("Error metodo getByKrId no implemenado"));
    }
    expect.hasAssertions();
  });
});
