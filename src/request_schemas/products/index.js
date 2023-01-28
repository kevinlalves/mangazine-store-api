import Joi from "joi";

const indexProductsSchema = Joi.object({
  per: Joi.number().required(),
  page: Joi.number().required()
});

export default indexProductsSchema;
