import Joi from "joi";

const idOnlySchema = Joi.object({
  id: Joi.string().required()
});

export default idOnlySchema;
