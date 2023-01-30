import Joi from "joi";
import cartSchema from "../cart.js";

const onlyLetterAndSpaces = /^[a-zA-Z\s]+$/;

const updateUserSchema = Joi.object({
  name: Joi.string().regex(onlyLetterAndSpaces),
  password: Joi.string().min(8),
  address: Joi.string(),
  cart: Joi.array().items(cartSchema),
});

export default updateUserSchema;
