import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import './product_banner.css';

const Products = () => {
  return (
    <div className="container">
      <div className="p-4 p-md-5 mb-4 rounded text-bg-dark product-bg-img" style={{ height: '20em' }}>
        <div className="col-md-2 px-0">
          <h1 className="display-4 fst-italic">Products</h1>
          <p className="lead my-3"></p>

        </div>
      </div>
      <div className="row">
        
        <div className="col-12 pt-5">
          <div className="text-center category-menu">

          
            <CategoryMenu />
          </div>
        </div>
      </div>
      <div className="row">
       
          <ProductList />
       
        <div className="col-12 col-md-3">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Products;
