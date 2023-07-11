import { ADD_TO_CART, GET_CART_PRODUCTS } from "../constants/cartConstants";

const cartReducer = (state = { cartData: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cartItem: action.payload.product,
        quantity: action.payload.quant,
      };
    case GET_CART_PRODUCTS:
      return {
        ...state,
        QuantitySum: action.payload.QuantitySum,
        loading: false,
      };
    default:
      return state;
  }
};

export default cartReducer;
