import jwt from "jsonwebtoken";
import { jwtSecret } from "../utils/constants/jwt.js";

export default async function authenticate(req, res, next) {
  const { token } = req.headers;


  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const { userId } = jwt.verify(token, jwtSecret);

    res.locals = { userId };
  }
  catch (error) {
    console.log(error);
    return res.sendStatus(401);
  }

  next();
}
