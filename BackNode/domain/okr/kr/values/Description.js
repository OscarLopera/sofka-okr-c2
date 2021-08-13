const DescriptionValueObject = (description) => {
  if (!description) {
    throw new Error( "Sin descripción" );
  }
  if (!(typeof description == "string")) {
    throw new Error("La descripcion debe ser de tipo texto");
  }
  return { value: description };
};

module.exports = DescriptionValueObject;
