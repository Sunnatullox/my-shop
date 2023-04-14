import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const register = async (userData) => {
  const res = await axios.post(`${base_url}/user/register`, userData);
  localStorage.setItem("customer", JSON.stringify(res.data));
  return res.data;
};

const login = async (userData) => {
  const res = await axios.post(`${base_url}/user/login`, userData);

  localStorage.setItem("customer", JSON.stringify(res.data));
  return res.data;
};

const getUserWishlist = async () => {
  const res = await axios.get(`${base_url}/user/wishlist`, config);
  return res.data;
};
const addToCart = async (cartData) => {
  const res = await axios.post(`${base_url}/user/cart`, cartData, config);
  return res.data;
};

const getCart = async () => {
  const res = await axios.get(`${base_url}/user/cart`, config);
  return res.data;
};

const removeProductFromCart = async (id) => {
  const res = await axios.delete(
    `${base_url}/user/delete-cart-product/${id}`,
    config
  );

  return res.data;
};

const updateProductFromCart = async (productDetails) => {
  const res = await axios.put(
    `${base_url}/user/update-cart-product/${productDetails.id}`,
    { newQuantity: productDetails.newQuantity },
    config
  );

  return res.data;
};

export const authService = {
  register,
  login,
  getUserWishlist,
  addToCart,
  getCart,
  removeProductFromCart,
  updateProductFromCart,
};
