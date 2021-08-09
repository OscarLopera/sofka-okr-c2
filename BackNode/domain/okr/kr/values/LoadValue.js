const LoadValueObject = (id) => {
  if (!load) {
    throw new Error("Debe contener una carga");
  }
  if (!(typeof load == "number")) {
    throw new Error("La carga debe ser numerica");
  }
  if (load < 0 || load > 100) {
    throw new Error("Debe incluir una carga entre cero y cien");
  }
  return { value: load };
};

module.exports = LoadValueObject;
