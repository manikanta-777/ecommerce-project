const Constants = () => {
  const sortList = {
    Relevance: "Relevance",
    popularity: "popularity",
    lowToHigh: "Price: Low To High",
    highToLow: "Price: High To Low",
  };
  const priceValue = [0, 200000];
  const types = {
    lowToHigh: "price",
    highToLow: "price",
    popularity: "noOfSales",
  };
  const order = {
    lowToHigh: true,
    highToLow: false,
    popularity: false,
  };
  const shippingCartText = "Item price includes shipping and handling";
  const carttext = "Add to Cart";
  const shippingDays = "Usually ships within 7 business days";
  const wishListText = "Add to wish list";
  return {
    sortList,
    priceValue,
    types,
    order,
    carttext,
    shippingCartText,
    shippingDays,
    wishListText,
  };
};

export default Constants;
