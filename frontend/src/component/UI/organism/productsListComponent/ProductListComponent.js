import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import PriceRange from "../../../utils/PriceRange";
import sortArray from "../../../utils/sortArray";
import ProductCardComponent from "../../atoms/productCardComponent/ProductCardComponent";
import SortingComponent from "../../molecules/sortingComponent/SortingComponent";
import "./ProductListComponent.css";

const ProductListComponent = (props) => {
  const { products, priceRange, categoryType, subCategoryType } = props;
  const [sortType, setSortType] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    if (priceRange.length === 0) {
      if (!categoryType) {
        setData(sortArray(sortType, products));
      } else {
        if (!subCategoryType) {
          setData(
            sortArray(sortType, products).filter(
              (product) => product.category === categoryType
            )
          );
        } else {
          setData(
            sortArray(sortType, products).filter(
              (product) =>
                product.category === categoryType &&
                product.subCategory === subCategoryType
            )
          );
        }
      }
    } else {
      if (!categoryType) {
        setData(
          sortArray(sortType, products).filter((product) =>
            PriceRange(product.price, priceRange)
          )
        );
      } else {
        if (!subCategoryType) {
          setData(
            sortArray(sortType, products).filter(
              (product) =>
                PriceRange(product.price, priceRange) &&
                product.category === categoryType
            )
          );
        } else {
          setData(
            sortArray(sortType, products).filter(
              (product) =>
                PriceRange(product.price, priceRange) &&
                product.category === categoryType &&
                product.subCategory === subCategoryType
            )
          );
        }
      }
    }

    if (data.length === 0 && !categoryType && !priceRange) {
      setData(products);
    }
  }, [sortType, priceRange, products, categoryType, subCategoryType]);

  return (
    <Fragment data-test="component-productList">
      <div className="container">
        <SortingComponent products={products} setSortType={setSortType} />
        {data.length !== 0 ? (
          <p className="productsCount">{data.length} results</p>
        ) : (
          <p className="noProducts">No Results</p>
        )}
        <div className="products">
          {data?.map((product) => (
            <ProductCardComponent key={product._id} product={product} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};
ProductListComponent.propTypes = {
  products: PropTypes.array,
  priceRange: PropTypes.array,
  categoryType: PropTypes.string,
  subCategoryType: PropTypes.func,
};
ProductListComponent.defaultProps = {
  products: [],
  priceRange: [],
  categoryType: "",
  subCategoryType: () => {},
};

export default ProductListComponent;
