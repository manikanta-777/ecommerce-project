export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const GET_CART_PRODUCTS = "GET_CART_PRODUCTS";
import { addToCart, loadCartProducts } from "../axios/cartAxios";

export const addProduct = (body) => async (dispatch) => {
  const cart = await addToCart(body);
  dispatch({
    type: ADD_TO_CART,
    payload: cart,
  });
  if (cart) dispatch(getCartProducts());
};

export const getCartProducts = () => async (dispatch) => {
  const cart = await loadCartProducts();
  dispatch({
    type: GET_CART_PRODUCTS,
    payload: cart,
  });
};
