const DescriptionValueObject = require("./values/description")
const IdOkrValueObject = require("./values/IdValue")
const ProgressValueObject = require("./values/progress")
const TitleValueObject = require("./values/title")
const ManagerNameValueObject = require("./values/ManagerName")
const ManagerMailValueObject = require("./values/ManagerMail")
const StartDateValueObject = require("./values/StartDate")
const EndDateValueObject = require("./values/EndDate")
const LoadValueObject = require("./values/LoadValue")

class Kr {
  constructor({
    idOkr, 
    managerName, 
    managerEmail, 
    startDate, 
    endDate, 
    loadValue,
    title,
    description,
    progress
  }) {
    this.idOkr = IdOkrValueObject(idOkr).value 
    this.managerName = ManagerNameValueObject(managerName).value
    this.managerEmail = ManagerMailValueObject(managerEmail).value 
    this.startDate = StartDateValueObject(startDate).value
    this.endDate = EndDateValueObject(endDate).value
    this.loadValue = LoadValueObject(loadValue).value
    this.title = TitleValueObject(title).value
    this.description = DescriptionValueObject(description).value
    this.progress = ProgressValueObject(progress).value

  }
}

module.exports = Kr
