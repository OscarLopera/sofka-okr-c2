const valueObjects = require("../../../../domain/okr/okr/valueObjects");

describe("validations value Objects Okr", () => {
  it("Objective Errors (null)", () => {
    try {
      valueObjects.ObjectiveValueObject(null);
    } catch (e) {
      expect(e).toEqual(new Error("Debe contener un objetivo"));
    }
    expect.hasAssertions()
  });
  it("Objective Errors (number)", () => {
    try {
      valueObjects.ObjectiveValueObject(4);
    } catch (e) {
      expect(e).toEqual(new Error("El objetivo debe ser de tipo texto"));
    }
    expect.hasAssertions()
  });

  
  it("description Errors (number)", () => {
    try {
      valueObjects.DescriptionValueObject(4);
    } catch (e) {
      expect(e).toEqual(new Error("La descripcion debe ser de tipo texto"));
    }
    expect.hasAssertions()
  });

  it("Id Errors (null)", () => {
    try {
      valueObjects.IdValueObject(null);
    } catch (e) {
      expect(e).toEqual(new Error("Debe contener un Id"));
    }
    expect.hasAssertions()
  });
  it("Id Errors (number)", () => {
    try {
      valueObjects.IdValueObject(4);
    } catch (e) {
      expect(e).toEqual(new Error("El id debe ser de tipo texto"));
    }
    expect.hasAssertions()
  });

  it("progress Errors (more than 100)", () => {
    try {
      valueObjects.ProgressValueObject(150);
    } catch (e) {
      expect(e).toEqual(new Error("Debe incluir un progreso entre cero y cien"));
    }
    expect.hasAssertions()
  });
  it("progress Errors (less than 100)", () => {
    try {
      valueObjects.ProgressValueObject(-10);
    } catch (e) {
      expect(e).toEqual(new Error("Debe incluir un progreso entre cero y cien"));
    }
    expect.hasAssertions()
  });
  it("progress Errors (string)", () => {
    try {
      valueObjects.ProgressValueObject("abc");
    } catch (e) {
      expect(e).toEqual(new Error("El progreso debe ser numerico"));
    }
    expect.hasAssertions()
  });

  it("title Errors (null)", () => {
    try {
      valueObjects.TitleValueObject(null);
    } catch (e) {
      expect(e).toEqual(new Error("Debe contener un titulo"));
    }
    expect.hasAssertions()
  });
  it("title Errors (number)", () => {
    try {
      valueObjects.TitleValueObject(4);
    } catch (e) {
      expect(e).toEqual(new Error("El titulo debe ser de tipo texto"));
    }
    expect.hasAssertions()
  });

});
