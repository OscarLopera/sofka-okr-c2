const valueObjects = require('./ValueObjects')

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
    this.idOkr = valueObjects.IdOkrValueObject(idOkr).value 
    this.managerName = valueObjects.ManagerNameValueObject(managerName).value
    this.managerEmail = valueObjects.ManagerMailValueObject(managerEmail).value 
    this.startDate = valueObjects.StartDateValueObject(startDate).value
    this.endDate = valueObjects.EndDateValueObject(endDate).value
    this.loadValue = valueObjects.LoadValueObject(loadValue).value
    this.title = valueObjects.TitleValueObject(title).value
    this.description = valueObjects.DescriptionValueObject(description).value
    this.progress = valueObjects.ProgressValueObject(progress).value

  }
}

module.exports = Kr
