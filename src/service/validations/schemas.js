const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email(1).required(),
  password: Joi.string().min(6),
  image: Joi.string().optional(),
});

module.exports = {
  userSchema,
};