const IdOkrValueObject = (id) => {
  if (!id) {
    throw new Error("Debe contener un Id Okr");
  }
  if (!(typeof id == "string")) {
    throw new Error("El id debe ser de tipo texto");
  }
  return { value: id };
};

module.exports = IdOkrValueObject;
