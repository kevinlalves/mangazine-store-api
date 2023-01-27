import Joi from "joi";

const createUserSchema = Joi.object({
  name: Joi.string().alphanum().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  address: Joi.string().required()
});

export default createUserSchema;
