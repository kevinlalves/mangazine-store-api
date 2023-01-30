import { ObjectId } from "mongodb";
import sanitizeObject from "../utils/functions/sanitizeObject.js";

const validateSchema = (schema) => {
  return (req, res, next) => {
    res.sanitizedParams = sanitizeObject({ ...req.body, ...req.query, ...req.params });
    const { error } = schema.validate(res.sanitizedParams, { abortEarly: false });

    if (error) {
      const errorMessages = error.details.map(detail => detail.message);

      return res.status(422).send(errorMessages);
    }

    const { id } = res.sanitizedParams;
    if (id) {
      try {
        res.sanitizedParams._id = ObjectId(id);
      }
      catch {
        return res.status(422).send("Formato do ID é inválido");
      }
    }

    next();
  };
}

export default validateSchema;
