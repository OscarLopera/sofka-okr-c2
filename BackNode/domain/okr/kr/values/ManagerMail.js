const ManagerMailValueObject = (mail) => {
  if (!mail) {
    return { value: "Sin Email" };
  }
  if (!(typeof mail == "string")) {
    throw new Error("El Email debe ser de tipo Email");
  }
  return { value: mail };
};

module.exports = ManagerMailValueObject;