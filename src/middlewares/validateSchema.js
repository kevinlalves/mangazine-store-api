export default function validateSchema(schema) {
  return (req, res, next) => {
    const { error } = schema.validate({ ...req.body, ...req.query, ...req.params }, { abortEarly: false });

    if (error) {
      const errorMessages = error.details.map(detail => detail.message);

      return res.status(422).send(errorMessages);
    }

    next();
  };
}
