import { getProductDetails } from "../axios/productDetailsAxios";
import {
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productDetailsConstants";

export const productDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const productDetails = await getProductDetails(id);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: productDetails.product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.productDetails.message,
    });
  }
};
