const validateRequest = (schema) => {
  return (req, res, next) => {
    if (schema.body) {
      const { error } = schema.validate(req.body);
      if (error) {
        return res
          .status(400)
          .json({ error: error.details.map((detail) => detail.message) });
      }
    }

    if (schema.params) {
      const { error } = schema.validate(req.params);
      if (error) {
        return res
          .status(400)
          .json({ error: error.details.map((detail) => detail.message) });
      }
    }

    next();
  };
};

export default validateRequest;
