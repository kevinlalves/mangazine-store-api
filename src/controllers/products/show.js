import chalk from "chalk";
import { products } from "../../config/database.js";
import internalError from "../../utils/functions/internalError.js";

const showProduct = async (req, res) => {
  const { _id } = res.sanitizedParams;

  console.log(chalk.cyan(`GET /products/${_id}`));
  try {
    const product = await products.findOne({ _id});
    if (!product) {
      return res.status(404).send("Produto não encontrado no sistema");
    }

    return res.json(product);
  }
  catch (error) {
    internalError(error, res);
  }
};

export default showProduct;
