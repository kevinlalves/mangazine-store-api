import Joi from "joi";

const cartSchema = Joi.object({
  product: Joi.object({
    _id: Joi.string().required(),
    name: Joi.string().required(),
    price: Joi.number().min(0).required(),
    image: Joi.string().uri().required(),
    genre: Joi.array().items(Joi.string()).required(),
    author: Joi.string().required(),
    description: Joi.string().required(),
    quantity: Joi.number().integer().min(0).required(),
    createAt: Joi.date().required(),
    rating: Joi.number().min(0).required()
  }),
  quantity: Joi.number().min(1).required(),
});

export default cartSchema;
