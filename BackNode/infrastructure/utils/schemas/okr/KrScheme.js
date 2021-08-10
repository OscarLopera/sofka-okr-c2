const joi = require('@hapi/joi');

const animalIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const pastureIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const animalBreedSchema = joi.string().min(3).max(15);
const animalAgeSchema = joi.number().max(100);
const animalsGenderSchema = joi.string();

const animalsIsVaccinatedSchema = joi.boolean();

const createAnimalSchema = {
  pastureId: pastureIdSchema, 
  breed: animalBreedSchema.required(),
  age: animalAgeSchema.required(),
  gender: animalsGenderSchema.required(),
};
const vaccinateAnimalSchema = {
  isVaccinated: animalsIsVaccinatedSchema.required(),
};

module.exports = {
  animalIdSchema,
  createAnimalSchema,
  vaccinateAnimalSchema,
};