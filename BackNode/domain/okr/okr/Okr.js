const {
  DescriptionValueObject, 
  IdValueObject, 
  ObjectiveValueObject, 
  ProgressValueObject, 
  TitleValueObject} = require("./ValueObjects");

class Okr {
  constructor({
    objective,
    title,
    managerId,
    description,
    verticalId,
    currentProgress,
  }) {
    this.objective = ObjectiveValueObject(objective).value;
    this.title = TitleValueObject(title).value;
    this.managerId = IdValueObject(managerId).value;
    this.description = DescriptionValueObject(description).value;
    this.verticalId = IdValueObject(verticalId).value;
    this.currentProgress = ProgressValueObject(currentProgress).value;
  }
}

module.exports = Okr;
