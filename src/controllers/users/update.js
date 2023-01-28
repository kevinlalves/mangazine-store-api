import chalk from "chalk";
import { users } from "../../config/database.js";
import internalError from "../../utils/functions/internalError.js";
import sanitizeObject from "../../utils/functions/sanitizeObject.js";
import bcrypt from "bcrypt";
import { saltRounds } from "../../utils/constants/bcrypt.js";

const updateUser = async (req, res) => {
  const { userId } = res.locals;
  const { name, email, password, address, cart } = sanitizeObject(req.body);
  let hashedPassword = "";
  console.log(chalk.cyan("PUT /users"));
  try {
    const user = await users.findOne({ _id: userId });
    if (!user) {
      return res.status(401).send({ message: "Usuário não encontrado!" });
    }
    if (password) {
      hashedPassword = await bcrypt.hash(password, saltRounds);
    }
    await users.updateOne(
      { _id: userId },
      {
        $set: {
          name: name || user.name,
          email: email || user.email,
          password: hashedPassword || user.password,
          address: address || user.address,
          cart: cart || user.cart,
        },
      }
    );
    res.sendStatus(200);
  } catch (error) {
    internalError(error, res);
  }
};
export default updateUser;
