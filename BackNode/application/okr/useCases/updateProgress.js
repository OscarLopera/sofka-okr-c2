const getDateNow = () => {
  const date = new Date();
  const day = date.getDate();
  const month = ("0" + (date.getMonth() + 1)).slice(-2)
  const year = date.getFullYear();
  return `${year}/${month}/${day}`;
};

const updateKrProgressUseCase = async (idKr, krVal, krRepository, okrRepository) => {
  const updatedKr = await krRepository.updateKr(idKr, {progress:krVal.progress});
  const idOkr = updatedKr.idOkr
  const krs = await krRepository.getMany({idOkr:idOkr})
  const progressOkr = krs.reduce((a, kr)=> a + (kr.loadValue * kr.progress)/100,0)
  const historicalProgress = { date: getDateNow(), progress: progressOkr }
  const updatedOkr = await okrRepository.updateOkr(idOkr,{currentProgress:progressOkr, $push:{historicalProgress}})
  return {updatedKr, updatedOkr} ;
};
module.exports = updateKrProgressUseCase;