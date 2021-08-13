const getOkrsByUserUseCase = async (userId, okrRepository, krRepository) => {
  const okrs = await okrRepository.getAllOkr(userId);
  console.log(okrs);
  const okrsWKrs = okrs.map(async (okr) => {
    try {
      const krs = await krRepository.getAllKrs(okr._id);
      console.log(krs);
      return { ...okr, krs };
    } catch (e) {}
  });
  console.log(okrsWKrs);
  return okrsWKrs || [];
};
module.exports = getOkrsByUserUseCase;
