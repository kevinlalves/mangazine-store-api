import chalk from "chalk";
import { sessions, users } from "../config/database.js";

export default async function authenticate(req, res, next) {
  const token = req.headers;

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const session = await sessions.findOne({ token });

    if (!session) {
      return res.sendStatus(401);
    }

    res.locals.user = await users.findOne({ _id: session.userId });
  }
  catch (error) {
    console.log(chalk.red("Error with authentication"));
    console.log(error);
  }

  next();
}
