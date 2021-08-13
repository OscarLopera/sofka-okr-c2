const getOkrsByUserUseCase = async (userId, okrRepository, krRepository) => {
  const okrs = await okrRepository.getAllOkr(userId);
  console.log(okrs);
  const okrsWKrs = okrs.map(async (okr) => {
    try {
      const krs = await krRepository.getAllKrs(okr._id);
      return { ...okr, krs };
    } catch (e) {}
  });
  return okrsWKrs || [];
};
module.exports = getOkrsByUserUseCase;
