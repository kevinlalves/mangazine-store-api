import { products } from "../../config/database.js"
import internalError from "../../utils/functions/internalError.js";

const indexProducts = async (req, res) => {
  const { page, per } = res.sanitizedParams;
  const indexFinal = page * per;
  const indexInicial = indexFinal - per;
  let totalLength;

  try {
    const productsList = await products.find().toArray();
    totalLength = productsList.length;

    return res.send({ totalLength, productsList: productsList.slice(indexInicial, indexFinal) });
  }
  catch (error) {
    internalError(error, res);
  }
}
export default indexProducts;
