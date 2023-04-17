import React, { useEffect, useState } from 'react';
import CartComponent from './CartComponent';
import ProductCard from './ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const getProducts = () => {
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        console.log(res);
        setIsVisible(true);
      })
      .catch((err) => console.log(err));
  };

  const showProduct = () => {
    getProducts();
  };

  return (
    <div>
      {!isVisible ? (
        <button onClick={showProduct} data-testid="get-btn">
          Get Products
        </button>
      ) : (
        <></>
      )}

      <div className="dashboard">
        {isVisible ? (
          <>
            <h1>Dashboard</h1>
            <div>
              <h1>Cart</h1>
            </div>
          </>
        ) : (
          <></>
        )}

        <div data-testid="products-container">
          {products.map((el) => (
            <ProductCard key={el.id} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
