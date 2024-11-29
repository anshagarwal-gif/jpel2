import React from "react";
const ProductSection = () => {
  return (
    <section className="products" id="products">
      <div className="container">
        <h2>Our Products</h2>
        <div className="product-list">
          <div className="product-item">
            <img
             src= "/src/assets/4.png"
              alt="Product 1"
            />
            <h3>Product 1</h3>
            <p>Brief description of product 1.</p>
          </div>
          <div className="product-item">
            <img
              src="https://via.placeholder.com/300x200?text=Product+2"
              alt="Product 2"
            />
            <h3>Product 2</h3>
            <p>Brief description of product 2.</p>
          </div>
          <div className="product-item">
            <img
              src="https://via.placeholder.com/300x200?text=Product+3"
              alt="Product 3"
            />
            <h3>Product 3</h3>
            <p>Brief description of product 3.</p>
          </div>
          <div className="product-item">
            <img
              src="https://via.placeholder.com/300x200?text=Product+4"
              alt="Product 4"
            />
            <h3>Product 4</h3>
            <p>Brief description of product 4.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
