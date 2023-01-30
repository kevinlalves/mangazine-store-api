import chalk from "chalk";
import { ObjectId } from "mongodb";
import { users } from "../../config/database.js";
import internalError from "../../utils/functions/internalError.js";
import userSerializer from "../../serializer/user.js";

const showUser = async (req, res) => {
  const { userId } = res.locals;

  console.log(chalk.cyan("GET /users"));
  try {
    const user = await users.findOne({ _id: ObjectId(userId) });
    if (!user) {
      return res.status(404).send("Usuário foi deletado!");
    }

    return res.json(userSerializer({ user }));
  }
  catch (error) {
    internalError(error, res);
  }
};

export default showUser;
