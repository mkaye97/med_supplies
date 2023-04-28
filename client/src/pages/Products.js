import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";


const Products = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-3">
          <CategoryMenu />
        </div>
        <div className="col-12 col-md-6">
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
