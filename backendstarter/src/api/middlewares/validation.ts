import Joi from 'joi';

// Registration Validation
const registerValidation = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().min(6).max(255).email().lowercase().required(),
  password: Joi.string().min(8).required(),
});

// Login Validation
const loginValidation = Joi.object({
  email: Joi.string().min(6).max(255).email().lowercase().required(),
  password: Joi.string().min(8).required(),
});

export { registerValidation, loginValidation };
