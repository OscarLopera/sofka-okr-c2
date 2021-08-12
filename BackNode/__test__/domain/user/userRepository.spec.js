const UserRepository = require("../../../domain/user/UserRepository");
const userRepository = new UserRepository();

describe("repository methods (not implemented) User", () => {


  it("Search user by email", () => {
    try {
      userRepository.findByEmail()
    } catch (e) {
      expect(e).toEqual(new Error("METHOD_NOT_IMPLEMENTED"));
    }
    expect.hasAssertions();
  });
  it("Search user by ID", () => {
    try {
      userRepository.getUsersById()
    } catch (e) {
      expect(e).toEqual(new Error("METHOD_NOT_IMPLEMENTED"));
    }
    expect.hasAssertions();
  });
  it("Search user by name", () => {
    try {
      userRepository.getUsersByName()
    } catch (e) {
      expect(e).toEqual(new Error("METHOD_NOT_IMPLEMENTED"));
    }
    expect.hasAssertions();
  });
});
