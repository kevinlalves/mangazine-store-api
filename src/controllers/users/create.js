import chalk from "chalk";
import { users } from "../../config/database.js";
import internalError from "../../utils/functions/internalError.js";
import bcrypt from "bcrypt";
import { saltRounds } from "../../utils/constants/bcrypt.js";
import sanitizeObject from "../../utils/functions/sanitizeObject.js";

const createUser = async (req, res) => {
  const { name, email, address, password } = sanitizeObject(req.body);

  console.log(chalk.cyan("POST /users"));
  try {
    const user = await users.findOne({ email });
    if (user) {
      return res.status("409").send("Email já está cadastrado")
    }

    const passwordHash = await bcrypt.hash(password, saltRounds);
    await insertOne({
      name,
      email,
      address,
      password: passwordHash,
      createdAt: new Date()
    });

    return res.status(201).send("OK");
  }
  catch (error) {
    internalError(error, res);
  }
};

export default createUser;
