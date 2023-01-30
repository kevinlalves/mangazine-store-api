import chalk from "chalk";
import { users } from "../../config/database.js";
import internalError from "../../utils/functions/internalError.js";
import bcrypt from "bcrypt";
import { saltRounds } from "../../utils/constants/bcrypt.js";
import { ObjectId } from "mongodb";

const updateUser = async (req, res) => {
  const { userId } = res.locals;
  const { name, email, password, address, cart } = res.sanitizedParams;
  let hashedPassword = "";

  console.log(chalk.cyan("PUT /users"));
  try {
    const user = await users.findOne({ _id: ObjectId(userId) });
    if (!user) {
      return res.status(404).send({ message: "Usuário foi deletado!" });
    }

    if (password) {
      hashedPassword = await bcrypt.hash(password, saltRounds);
    }

    await users.updateOne({ _id: ObjectId(userId) }, {
      $set: {
        name: name || user.name,
        email: email || user.email,
        password: hashedPassword || user.password,
        address: address || user.address,
        cart: cart || user.cart,
      },
    });

    res.send("OK");
  }
  catch (error) {
    internalError(error, res);
  }
};

export default updateUser;
