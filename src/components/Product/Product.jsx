import React from "react";
import "./Product.scss";
const Product = ({img, link}) => {
  return (
    <div className="product--card">
      <div className="p-browser">
        <span className="p-circle"></span>
        <span className="p-circle"></span>
        <span className="p-circle"></span>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
