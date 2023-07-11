import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
} from "../constants/productConstants";

export const productReducer = (state = { productsData: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return {
        loading: true,
        productsData: [],
      };
    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        categories: action.payload.categories,
        catSC: action.payload.catSC,
        products: action.payload.allProducts,
      };
    case ALL_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
