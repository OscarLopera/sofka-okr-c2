const DescriptionValueObject = (description) => {
  if (!description) {
    return { value: "Sin descripción" };
  }
  if (!(typeof description == "string")) {
    throw new Error("La descripcion debe ser de tipo texto");
  }
  return { value: description };
};

module.exports = DescriptionValueObject;
