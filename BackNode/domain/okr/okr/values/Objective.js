const ObjectiveValueObject = (objective) => {
  if (!objective) {
    throw new Error("Debe contener un objetivo");
  }
  if (!(typeof objective == "string")) {
    throw new Error("El objetivo debe ser de tipo texto");
  }
  return { value: objective };
};

module.exports = ObjectiveValueObject;
