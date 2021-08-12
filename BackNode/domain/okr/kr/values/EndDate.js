const EndDateValueObject = (endDate) => {
  if (!endDate) {
    return { endDate: "Sin Fecha de finalizacion" };
  }
  if (!(typeof endDate == "string")) {
    throw new Error("La fecha de finalizacion debe ser del tipo fecha");
  }
  return { value: endDate };
};

module.exports = EndDateValueObject;