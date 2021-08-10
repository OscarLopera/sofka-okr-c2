const ProgressValueObject = (progress) => {
  if (!progress) {
    return { value: 0 };
  }
  if (!(typeof progress == "number")) {
    throw new Error("El progreso debe ser numerico");
  }
  if (progress < 0 || progress > 100) {
    throw new Error("Debe incluir un progreso entre cero y cien");
  }
  return { value: progress };
};

module.exports = ProgressValueObject;
