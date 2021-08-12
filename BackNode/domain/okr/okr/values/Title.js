const TitleValueObject = (title) => {
  if (!title) {
    throw new Error("Debe contener un titulo");
  }
  if (!(typeof title == "string")) {
    throw new Error("El titulo debe ser de tipo texto");
  }
  return { value: title };
};

module.exports = TitleValueObject;
