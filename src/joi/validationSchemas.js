import Joi from "joi";

export const userSchema = Joi.object({
  body: {
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
  },
});

export const loginSchema = Joi.object({
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
});

export const deleteBookSchema = Joi.object({
  params: {
    bookId: Joi.string().required(),
  },
});

export const addToCartSchema = Joi.object({
  params: {
    bookId: Joi.string().required(),
  },
});

export const deleteFromCartSchema = Joi.object({
  params: {
    bookId: Joi.string().required(),
  },
});
