import Joi from "joi";
import { onlyLettersAndSpaces } from "../../utils/constants/regex.js";

const createUserSchema = Joi.object({
  name: Joi.string().regex(onlyLettersAndSpaces).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  address: Joi.string().required()
});

export default createUserSchema;
