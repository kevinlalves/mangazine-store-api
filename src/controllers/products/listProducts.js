import { products } from "../../config/database.js"

const listProducts = async (req, res) => {
const { page, per } = req.query
const indexFinal = page*per
const indexInicial = indexFinal - per 
let totalLength
try {
    const productsList = await products.find().toArray();
    totalLength = productsList.length
    res.send({ totalLength, productsList: productsList.slice(indexInicial, indexFinal) });
} catch (error) {
    console.error(error);
    res.sendStatus(500);
}
}
export default listProducts