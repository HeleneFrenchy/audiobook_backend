import Joi from "joi";

export const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const forgottenPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
});


export const deleteBookSchema = Joi.object({
  bookId: Joi.string().required(),
});

export const addToCartSchema = Joi.object({
  bookId: Joi.string().required(),
});

export const deleteFromCartSchema = Joi.object({
  bookId: Joi.string().required(),
});

