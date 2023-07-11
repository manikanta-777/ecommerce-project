import axios from "axios";

const axiosInterceptor = (data) => {
  const { method, url } = data;
  return axios({
    method: method,
    url: url,
  });
};

export const getProductDetails = async (id) => {
  const request = {
    method: "get",
    url: `/api/v1/product/${id}`,
  };
  const { data } = await axiosInterceptor(request);

  return data;
};
