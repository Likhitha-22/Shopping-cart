import React, { useState, useReducer } from "react";
import _products from "./products.json";
import "./styles.css";

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.product];
    default:
      return state;
  }
}

export default function App() {
  const [cart, setCart] = useReducer(cartReducer, []);
  const [products] = useState(_products);
  //console.log(products);
  function addProduct(product) {
    setCart({ product, type: "add" });
    let cartProduct = {
      partNo: `#` + product.partNumber,
      price: product.pricing.list.replace("$", "")
    };
    console.log(cartProduct);
  }
  return (
    <div className="container">
      {products.map((product, index) => (
        <div className="row" key={index}>
          <>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-3 col-sm-3 col-md-3">
                  <img className="" src={product.image} alt="Battery images" />
                </div>
                <div className="col-9 col-sm-9 col-md-9">
                  <p className="description font-weight-bold">
                    {product.productDescription}
                  </p>
                  <p className="productPart">
                    PartNo:{" "}
                    <span className="partno">#{product.partNumber}</span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 text-right">
                  <span className="col mt-n5">{product.pricing.list}</span>
                  <button
                    onClick={() => addProduct(product)}
                    className="btn btn-sm btn-outline"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="hrLine"></div>
          </>
        </div>
      ))}
      <div className="container">Cart : Total {cart?.length} products.</div>
    </div>
  );
}
