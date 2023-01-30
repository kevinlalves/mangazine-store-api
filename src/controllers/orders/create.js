import chalk from "chalk";
import { ObjectId } from "mongodb";
import { orders, ordersProducts, products, users } from "../../config/database.js";
import internalError from "../../utils/functions/internalError.js";

const createOrder = async (req, res) => {
  const { userId } = res.locals;
  const { address, paymentMethod, cart } = res.sanitizedParams;

  console.log(chalk.cyan("POST /checkout"));
  try {
    await users.updateOne({ _id: ObjectId(userId) }, { $set: { cart: [] } });

    const { insertedId: orderId } = await orders.insertOne({ userId, address, paymentMethod });

    await ordersProducts.insertMany(cart.map(({ product, quantity }) => ({
      orderId,
      productId: product._id,
      quantity
    })));

    for (const { product, quantity } of cart) {
      await products.updateOne({ _id: ObjectId(product._id) }, {
        $inc: {
          quantity: -quantity
        }
      });
    }

    res.status(201).send("OK");
  }
  catch (error) {
    internalError(error, res);
  }
};

export default createOrder;
