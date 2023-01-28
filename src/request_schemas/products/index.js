import Joi from "joi";

const indexProductsSchema = Joi.object({
  per: Joi.number(),
  page: Joi.number()
});

export default indexProductsSchema;
