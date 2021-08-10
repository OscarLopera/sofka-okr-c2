const Kr = require('../../../../domain/okr/kr/Kr')
const Description = require('../../../../domain/okr/kr/values/Description')
const EndDate = require('../../../../domain/okr/kr/values/EndDate')
const IdOkr = require('../../../../domain/okr/kr/values/IdOkrValue')
const LoadValue = require('../../../../domain/okr/kr/values/LoadValue')
const ManagerMail = require('../../../../domain/okr/kr/values/ManagerMail')
const ManagerName = require('../../../../domain/okr/kr/values/ManagerName')
const Progress = require('../../../../domain/okr/kr/values/Progress')
const StartDate = require('../../../../domain/okr/kr/values/StartDate')
const Title = require('../../../../domain/okr/kr/values/Title')

const createKr = ( { 
    idOkr,
    managerName, 
    managerEmail, 
    startDate, 
    endDate, 
    loadValue,
    title,
    description,
    progress  },  KrRepository ) => {

  const kr = new Kr(
    new IdOkr(idOkr),
    new ManagerName(managerName), 
    new ManagerEmail(managerEmail), 
    new startDate(startDate), 
    new EndDate(endDate), 
    new LoadValue(loadValue),
    new Title(title),
    new description(description),
    new progress(progress))

  return KrRepository.createKr(animal)
}
module.exports = createKr