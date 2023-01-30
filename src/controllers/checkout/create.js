import chalk from "chalk";
import { ObjectId } from "mongodb";
import { checkout } from "../../config/database.js";
import internalError from "../../utils/functions/internalError.js";

const createCheckout = async (req, res) => {
  const { userId } = res.locals;
  const { user, total } = res.sanitizedParams;

  console.log(chalk.cyan("POST /checkout"));
  try {
    await checkout.insertOne({
      user: {
        ...user,
        userId: ObjectId(userId),
      },
      total,
      createAt: new Date(),
    });
    return res.status(201).send("OK");
  } catch (error) {
    internalError(error, res);
  }
};

export default createCheckout;
