const valueObjects = require("./ValueObjects")
class Okr {
  constructor({
    objective,
    title,
    managerId,
    description,
    verticalId,
    currentProgress,
  }) {
    this.objective = valueObjects.ObjectiveValueObject(objective).value;
    this.title = valueObjects.TitleValueObject(title).value;
    this.managerId = valueObjects.IdValueObject(managerId).value;
    this.description = valueObjects.DescriptionValueObject(description).value;
    this.verticalId = valueObjects.IdValueObject(verticalId).value;
    this.currentProgress =valueObjects.ProgressValueObject(currentProgress).value;
  }
}

module.exports = Okr;
