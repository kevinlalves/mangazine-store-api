import { ObjectId } from "mongodb";
import chalk from "chalk";
import { users } from "../../config/database.js";
import internalError from "../../utils/functions/internalError.js";

const showUser = async (req, res) => {
  const { userId } = res.locals;

  console.log(chalk.cyan("GET /users"));
  try {
    const user = await users.findOne({ _id: ObjectId(userId) });
    if (!user) {
      return res.status(404).send("Usuário não encontrado!");
    }
    return res.status(201).send({
      name: user.name,
      email: user.email,
      address: user.address,
    });
  } catch (error) {
    internalError(error, res);
  }
};

export default showUser;
