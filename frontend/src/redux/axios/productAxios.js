import axios from "axios";
import ProductsMiddleware from "../middleware/ProductsMiddleware";

const axiosInterceptor = (data) => {
  const { method, url } = data;
  return axios({
    method: method,
    url: url,
  });
};

export const getProduct = async () => {
  const request = {
    method: "get",
    url: "/api/v1/products",
  };
  const { data } = await axiosInterceptor(request);
  const newData = await ProductsMiddleware(data);
  return newData;
};
