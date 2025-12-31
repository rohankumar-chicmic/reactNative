import axios from "axios";
const fetchProducts = async () => {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data;
}


export {fetchProducts};