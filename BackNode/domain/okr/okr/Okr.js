const DescriptionValueObject = require("./values/Description");
const IdValueObject = require("./values/IdValue");
const ObjectiveValueObject = require("./values/Objective");
const ProgressValueObject = require("./values/Progress");
const TitleValueObject = require("./values/Title");

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
