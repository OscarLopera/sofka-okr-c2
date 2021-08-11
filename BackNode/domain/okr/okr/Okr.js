<<<<<<< HEAD
const DescriptionValueObject = require("./values/Description");
const IdValueObject = require("./values/IdValue");
const ObjectiveValueObject = require("./values/Objective");
const ProgressValueObject = require("./values/Progress");
const TitleValueObject = require("./values/Title");

=======
const valueObjects = require("./ValueObjects")
>>>>>>> 90471bdca4412b3c82e1d512b379c758960a24d8
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
