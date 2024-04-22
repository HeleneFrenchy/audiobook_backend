import Joi from "joi";

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ error: error.details.map((detail) => detail.message) });
    }
    next(); 
  };
};

export default validateRequest;
