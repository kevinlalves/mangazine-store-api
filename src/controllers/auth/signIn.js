import { users } from "../../config/database.js";
import bcrypt from "bcrypt";
import chalk from "chalk";
import internalError from "../../utils/functions/internalError.js";
import { jwtSecret, jwtTokenDuration  } from "../../utils/constants/jwt.js";
import jwt from "jsonwebtoken";

const signIn = async (req, res) => {
  const { email, password } = res.sanitizedParams;

  console.log(chalk.cyan("POST /auth/sign-in"));
  try {
    const user = await users.findOne({ email });
    if (!user) {
      return res.status(404).send("Seu email e/ou senha são inválidos");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(404).send("Seu email e/ou senha são inválidos");
    }

    const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: jwtTokenDuration });

    return res.status(201).json({ token });
  }
  catch (error) {
    internalError(error, res);
  }
};

export default signIn;
