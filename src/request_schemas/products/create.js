import Joi from "joi";

const createProductSchema = Joi.object({
  name: Joi.string().required(),
  author: Joi.string().required(),
  genre: Joi.array().items(Joi.string()).required(),
  description: Joi.string().required(),
  quantity: Joi.number().integer().min(0),
  price: Joi.number().min(0).required(),
  image: Joi.string().uri().required()
});

export default createProductSchema;
