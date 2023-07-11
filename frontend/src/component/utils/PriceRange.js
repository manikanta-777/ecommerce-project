const PriceRange = (productPrice, priceRange) => {
  return productPrice >= priceRange[0] && productPrice <= priceRange[1];
};

export default PriceRange;
