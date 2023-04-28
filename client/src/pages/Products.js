import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Products = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 pt-5">
          <div className="text-center category-menu">
            <CategoryMenu />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <ProductList />
        </div>
        <div className="col-12 col-md-3">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Products;
