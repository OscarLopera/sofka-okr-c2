const ManagerMailValueObject = (mail) => {
  if (!mail) {
    throw new Error("Sin Email" );
  }
  if (!(typeof mail == "string")) {
    throw new Error("El Email debe ser de tipo Email");
  }
  return { value: mail };
};

module.exports = ManagerMailValueObject;