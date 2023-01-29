import jwt from "jsonwebtoken";
import { jwtSecret } from "../utils/constants/jwt.js";

export default async function authenticate(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const { userId } = jwt.verify(token, jwtSecret);

    res.locals = { userId };
  } catch (error) {
    console.log(error);
    return res.sendStatus(401);
  }

  next();
}
