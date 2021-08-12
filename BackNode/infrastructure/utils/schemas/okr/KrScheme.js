const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);


const objectiveSchema = joi.string();
const titleSchema = joi.string().min(3).max(25);
const managerIdSchema = joi.string();
const descriptionSchema = joi.string().max(50);
const verticalIdSchema = joi.string();


const createOkrSchema = {
  objective: objectiveSchema, 
  title: titleSchema.required(),
  managerId: managerIdSchema.required(),
  description: descriptionSchema,
  verticalId: verticalIdSchema.required(),
};


module.exports = {
  idSchema,
  createOkrSchema
};
