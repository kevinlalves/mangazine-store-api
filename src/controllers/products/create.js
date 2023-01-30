import chalk from "chalk";
import { products } from "../../config/database.js";
import internalError from "../../utils/functions/internalError.js";

const createProduct = async (req, res) => {
  const { name, author, genre, description, quantity, price, image } = res.sanitizedParams;
  const initialQuantity = 0;

  console.log(chalk.cyan("POST /products"));
  try {
    const product = await products.findOne({ name });
    if (product) {
      return res.status(409).send("Produto de mesmo nome já existe.");
    }

    await products.insertOne({
      name,
      author,
      genre,
      description,
      price,
      rating: 0,
      quantity: quantity || initialQuantity,
      reviewCount: 0,
      image,
      createAt: new Date()
    });

    return res.status(201).send("OK");
  }
  catch (error) {
    internalError(error, res);
  }
};

export default createProduct;
