import Joi from "joi";
import cartSchema from "../cart.js";

const createOrderSchema = Joi.object({
  address: Joi.string().required(),
  paymentMethod: Joi.string().valid("pix", "credit card", "bank slip", "xerecard").required(),
  cart: Joi.array().items(cartSchema).required()
});

export default createOrderSchema;
