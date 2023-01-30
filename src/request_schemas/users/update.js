import Joi from "joi";

const onlyLetterAndSpaces = /^[a-zA-Z\s]+$/;

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

const updateUserSchema = Joi.object({
  name: Joi.string().regex(onlyLetterAndSpaces),
  email: Joi.string().email(),
  password: Joi.string().min(8),
  address: Joi.string(),
  cart: Joi.array().items(cartSchema),
});

export default updateUserSchema;
