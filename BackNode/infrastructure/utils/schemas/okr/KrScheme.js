const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const idOkrSchema = joi.string();
const titleSchema = joi.string().min(3).max(25);
const descriptionSchema = joi.string().max(50);
const managerNameSchema = joi.string().min(3).max(25) 
const managerEmailSchema = joi.string().email().min(3).max(25)
const startDateSchema = joi.string().min(3).max(25) 
const endDateSchema = joi.string().min(3).max(25)
const loadValueSchema = joi.number().min(0).max(100)
const progressSchema = joi.number().min(0).max(100)

const createKrSchema = {
  idOkr: idOkrSchema.required(),
  title: titleSchema.required(),
  description:descriptionSchema.required(),
  managerName:managerNameSchema.required(),
  managerEmail:managerEmailSchema.required(),
  startDate:startDateSchema.required(),
  endDate:endDateSchema.required(),
  loadValue:loadValueSchema.required(),
  progress:progressSchema.required()
};

const updateProgressSchema = {
  progress:progressSchema.required()
}


module.exports = {
  idSchema,
  createKrSchema,
  updateProgressSchema
};
