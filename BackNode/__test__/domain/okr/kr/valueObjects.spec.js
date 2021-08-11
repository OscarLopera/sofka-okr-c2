const valueObjects = require("../../../../domain/okr/kr/ValueObjects");

describe("validations value Objects Kr", () => {
  it("EndDate Errors (null)", () => {
    try {
      valueObjects.EndDateValueObject(null);
    } catch (e) {
      expect(e).toEqual(new Error("Sin Fecha de finalizacion"));
    }
    expect.hasAssertions()
  });
  it("End Date Errors (number)", () => {
    try {
      valueObjects.EndDateValueObject(4);
    } catch (e) {
      expect(e).toEqual(new Error("La fecha de finalizacion debe ser del tipo fecha"));
    }
    expect.hasAssertions()
  });

  it("StartDate Errors (null)", () => {
    try {
      valueObjects.StartDateValueObject(null);
    } catch (e) {
      expect(e).toEqual(new Error("Sin Fecha de inicio"));
    }
    expect.hasAssertions()
  });
  it("Start Date Errors (number)", () => {
    try {
      valueObjects.StartDateValueObject(4);
    } catch (e) {
      expect(e).toEqual(new Error("La fecha de inicio debe ser del tipo fecha"));
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
  it("description Errors (null)", () => {
    try {
      valueObjects.DescriptionValueObject(null);
    } catch (e) {
      expect(e).toEqual(new Error("Sin descripción"));
    }
    expect.hasAssertions()
  });

  it("Id Errors (null)", () => {
    try {
      valueObjects.IdOkrValueObject(null);
    } catch (e) {
      expect(e).toEqual(new Error("Debe contener un Id"));
    }
    expect.hasAssertions()
  });
  it("Id Errors (number)", () => {
    try {
      valueObjects.IdOkrValueObject(4);
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
  it("progress Errors (null)", () => {
    try {
      valueObjects.ProgressValueObject(null);
    } catch (e) {
      expect(e).toEqual(new Error("Debe contener un progreso"));
    }
    expect.hasAssertions()
  });


  it("load Value Errors (more than 100)", () => {
    try {
      valueObjects.LoadValueObject(150);
    } catch (e) {
      expect(e).toEqual(new Error("Debe incluir una carga entre cero y cien"));
    }
    expect.hasAssertions()
  });
  it("load Value Errors (less than 100)", () => {
    try {
      valueObjects.LoadValueObject(-10);
    } catch (e) {
      expect(e).toEqual(new Error("Debe incluir una carga entre cero y cien"));
    }
    expect.hasAssertions()
  });
  it("load Value Errors (string)", () => {
    try {
      valueObjects.LoadValueObject("abc");
    } catch (e) {
      expect(e).toEqual(new Error("La carga debe ser numerica"));
    }
    expect.hasAssertions()
  });

  it("load Value Errors (null)", () => {
    try {
      valueObjects.LoadValueObject(null);
    } catch (e) {
      expect(e).toEqual(new Error("Debe contener una carga"));
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

  it("managerMail Errors (number)", () => {
    try {
      valueObjects.ManagerMailValueObject(4);
    } catch (e) {
      expect(e).toEqual(new Error("El Email debe ser de tipo Email"));
    }
    expect.hasAssertions()
  });
  it("managerMail Errors (null)", () => {
    try {
      valueObjects.ManagerMailValueObject(null);
    } catch (e) {
      expect(e).toEqual(new Error("Sin Email"));
    }
    expect.hasAssertions()
  });

  it("managerName Errors (number)", () => {
    try {
      valueObjects.ManagerNameValueObject(4);
    } catch (e) {
      expect(e).toEqual(new Error("El nombre debe ser de tipo texto"));
    }
    expect.hasAssertions()
  });
  it("managerName Errors (null)", () => {
    try {
      valueObjects.ManagerNameValueObject(null);
    } catch (e) {
      expect(e).toEqual(new Error("Sin Nombre"));
    }
    expect.hasAssertions()
  });

});
