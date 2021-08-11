const StartDateValueObject = (startDate) => {
  if (!startDate) {
    throw new Error("Sin Fecha de inicio")
  }
  if (!(typeof startDate == "string")) {
    throw new Error("La fecha de inicio debe ser del tipo fecha");
  }
  return { value: startDate };
};

module.exports = StartDateValueObject;