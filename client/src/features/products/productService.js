import axios from 'axios';
import { base_url, config } from '../../utils/axiosConfig';


const getProducts = async() => {
    try {
        const res = await axios.get(`${base_url}/product`) ; 
            return res.data;
        
    } catch (error) {
        console.log(error)
    }
}



const addToWishlist = async(prodId) => {
    try {
        const res = await axios.put(`${base_url}/product/wishlist`,{prodId}, config) ; 
        console.log(res)    
        return res.data;
    } catch (error) {
        console.log(error)
    }
}



const getSingleProduct = async(id) => {
    try {
        const res = await axios.get(`${base_url}/product/${id}`) ; 
            return res.data;
        
    } catch (error) {
        console.log(error)
    }
}
export const productService  = {
    getProducts,
    addToWishlist,
    getSingleProduct
}