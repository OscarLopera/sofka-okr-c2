const {
    DescriptionValueObject, 
    IdOkrValueObject, 
    ProgressValueObject, 
    TitleValueObject, 
    ManagerNameValueObject, 
    ManagerMailValueObject, 
    StartDateValueObject, 
    EndDateValueObject, 
    LoadValueObject} = require('./ValueObjects')

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
