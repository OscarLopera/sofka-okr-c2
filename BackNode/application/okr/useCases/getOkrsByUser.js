const getOkrsByUserUseCase = async (userId, okrRepository, krRepository) => {
  const okrs = await okrRepository.getAllOkr(userId);
  const okrsWKrs = await Promise.all(
    okrs.map(async (okr) => {
      const krs = await krRepository.getAllKrs(okr._id);
      return { okr, krs };
    })
  );
  return okrsWKrs || [];
};
module.exports = getOkrsByUserUseCase;
