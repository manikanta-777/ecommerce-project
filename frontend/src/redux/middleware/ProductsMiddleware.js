const ProductsMiddleware = (props) => {
  const { products } = props;
  const cat = [];

  products?.map((product) => cat.push(product.category));

  const categories = [...new Set(cat)];

  const catS = [];

  categories?.map((category, index) => (catS[category] = []));

  products?.map((product) => catS[product.category].push(product.subCategory));

  const catSC = [];

  categories?.map(
    (category, index) => (catSC[category] = [...new Set(catS[category])])
  );

  let allCategories = [];

  categories?.map((category, index) => (allCategories[category] = []));

  categories?.map(
    (category, index) =>
      catS[category] &
      catS[category].map((sc) => (allCategories[category][sc] = []))
  );

  products?.map((product) => {
    categories &&
      categories.map((Category, index) => {
        catSC[Category] &&
          catSC[Category].map((subCategory, ind) => {
            if (product.subCategory === subCategory) {
              allCategories[Category][subCategory].push(product);
            }
          });
      });
  });

  const allProducts = [];
  categories?.map((category, index) => {
    catSC[category] &&
      catSC[category].map((subCategory, ind) => {
        allCategories[category][subCategory] &&
          allCategories[category][subCategory].map((product) =>
            allProducts.push(product)
          );
      });
  });
  return { categories, catSC, allCategories, allProducts };
};

export default ProductsMiddleware;
