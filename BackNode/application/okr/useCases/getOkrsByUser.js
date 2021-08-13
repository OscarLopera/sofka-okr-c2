const getOkrsByUserUseCase = async (userId, okrRepository, krRepository) => {
  const okrs = await okrRepository.getAllOkr(userId);
  const okrsWKrs = await okrs.map( async (okr) => {
    const krs = await krRepository.getAllKrs(okr._id);
    console.log(krs);
    return { ...okr, krs };
  });
  console.log(okrsWKrs);
  return okrsWKrs || [];
};
module.exports = getOkrsByUserUseCase;
