import Joi from "joi";

const cartSchema = Joi.object({
  product: Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    price: Joi.number().min(0).required(),
    image: Joi.string().uri().required(),
  }),
  quantity: Joi.number().min(1).required(),
});
const updateUserSchema = Joi.object({
  name: Joi.string().alphanum(),
  emmail: Joi.string().email(),
  password: Joi.string().min(8),
  address: Joi.string(),
  cart: Joi.array().items(cartSchema),
});

export default updateUserSchema;
