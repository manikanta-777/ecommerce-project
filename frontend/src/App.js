import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetailsPage from "./component/pages/productDetailsPage/ProductDetailsPage";
import ProductsListPage from "./component/pages/productsListPage/ProductsListPage";

const App = () => {
  return (
    <div className="body">
      <Router>
        <Routes>
          <Route path="/products" element={<ProductsListPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
