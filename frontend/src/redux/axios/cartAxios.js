import axios from "axios";
import CartMiddleware from "../middleware/CartMiddleware";

const axiosInterceptor = (value) => {
  const { method, url, data } = value;
  const axioscall = axios({
    method: method,
    url: url,
    data: data,
  });
  return axioscall;
};

//for Add to cart
export const addToCart = async (body) => {
  const request = {
    method: "post",
    url: "/api/v1/cartproduct/new",
    data: body,
  };
  const { data } = await axiosInterceptor(request);
  return data;
};

//for all cart items
export const loadCartProducts = async () => {
  const request = {
    method: "get",
    url: "/api/v1/cartproducts",
  };
  const { data } = await axiosInterceptor(request);
  const value = await CartMiddleware(data);
  return value;
};
