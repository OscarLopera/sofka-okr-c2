const krsService = require("../../../../application/okr/index");
const KrRepository = require("../../../repositories/okr/KrRepository");
const krRepository = new KrRepository();

module.exports = async (req, res, next) => {
  const { body: kr } = req;
  try {
    
    const createdKrId = await krsService.createKr(
      kr,
      krRepository
    )

    res.status(201).json({
      dataId: createdKrId,
      message: "kr created",
    })

  } catch (err) {
    next(err);
  }
};