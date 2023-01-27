import Joi from "joi";

const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
});

export default signInSchema;
