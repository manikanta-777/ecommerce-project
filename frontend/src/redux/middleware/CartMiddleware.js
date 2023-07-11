const CartMiddleware = (props) => {
  const cartItems = props;
  var QuantitySum = 0;
  cartItems.cartProducts?.map((product) => {
    QuantitySum = QuantitySum + product.Quantity;
  });
  return { QuantitySum };
};
export default CartMiddleware;
