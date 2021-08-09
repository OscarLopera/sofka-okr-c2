const DescriptionValueObject = require("./values/description");
const IdValueObject = require("./values/IdValue");
const ObjectiveValueObject = require("./values/objective");
const ProgressValueObject = require("./values/progress");
const TitleValueObject = require("./values/title");

class Okr {
  constructor(
    objective,
    title,
    managerId,
    description,
    verticalId,
    currentProgress
  ) {
    this.objective = ObjectiveValueObject(objective).value;
    this.title = TitleValueObject(title).value;
    this.managerId = IdValueObject(managerId).value;
    this.description = DescriptionValueObject(description).value;
    this.verticalId = IdValueObject(verticalId).value;
    this.currentProgress = ProgressValueObject(currentProgress).value;
  }
}

module.exports = Okr;
