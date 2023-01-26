import { users } from "../../config/database.js";
import internalError from "../../utils/functions/internalError.js";
export const updateCart = async (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;
  const {_id} = res.locals.user;
  try {
    const isProductExist = await users.findOne({
      _id,
      cart: { $elemMatch: { productId } },
    });
    if (!isProductExist) {
      await users.updateOne(
        { _id },
        { $push: { cart: { productId, quantity } } }
      );
    } else {
      const previousQuantity = isProductExist.cart[0].quantity;
      await users.updateOne(
        { _id, "cart.productId": productId },
        {
          $set: { "cart.$.quantity": previousQuantity + quantity },
        }
      );
    }
    res.status(202).send({ message: "Produto registrado ao carrinho!" });
  } catch (error) {
    internalError(error, res);
  }
};
