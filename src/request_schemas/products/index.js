import Joi from "joi";

const indexProductsSchema = Joi.object({
  per: Joi.number().min(1).required(),
  page: Joi.number().min(1).required()
});

export default indexProductsSchema;
