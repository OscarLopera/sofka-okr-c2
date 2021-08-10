const Joi = require('@hapi/joi');

const schema = Joi.object({
  userId: Joi.string()
    .alphanum()
    .min(20)
    .required(),
  mail: Joi.object()
    .required(),
  screen: Joi.object()
    .required()
})

const UpdateSchema = Joi.object({
  mail: Joi.object()
    .required(),
  screen: Joi.object()
    .required()
})

module.exports = { schema, UpdateSchema };