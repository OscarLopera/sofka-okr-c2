const ManagerNameValueObject = (name) => {
  if (!name) {
    throw new Error("Sin Nombre");
  }
  if (!(typeof name == "string")) {
    throw new Error("El nombre debe ser de tipo texto");
  }
  return { value: name };
};

module.exports = ManagerNameValueObject;