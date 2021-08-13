const OkrRepository = require("../../../../domain/okr/okr/Okr-repository");
const okrRepository = new OkrRepository();

describe("repository methods (not implemented) Okr", () => {
  it("create okr", () => {
    try {
        okrRepository.createOkr()
    } catch (e) {
      expect(e).toEqual(new Error("Error metodo createOkr no implemenado"));
    }
    expect.hasAssertions();
  });
  it("delete okr", () => {
    try {
        okrRepository.deleteOkr()
    } catch (e) {
      expect(e).toEqual(new Error("Error metodo deleteOkr no implemenado"));
    }
    expect.hasAssertions();
  });
  it("getAll okr", () => {
    try {
        okrRepository.getAllOkr()
    } catch (e) {
      expect(e).toEqual(new Error("Error metodo getAllOkr no implemenado"));
    }
    expect.hasAssertions();
  });
  it("update okr", () => {
    try {
        okrRepository.updateOkr()
    } catch (e) {
      expect(e).toEqual(new Error("Error metodo updateOkr no implemenado"));
    }
    expect.hasAssertions();
  });
  it("getBy OkrId ", () => {
    try {
        okrRepository.getByOkrId()
    } catch (e) {
      expect(e).toEqual(new Error("Error metodo getByOkrId no implemenado"));
    }
    expect.hasAssertions();
  });
});
