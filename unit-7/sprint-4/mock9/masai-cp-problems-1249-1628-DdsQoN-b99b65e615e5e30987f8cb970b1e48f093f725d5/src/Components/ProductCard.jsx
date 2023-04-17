import React, { useState } from 'react';

const ProductCard = ({ id, name, price, stock }) => {
const [cart,setCart]=useState([]);
// const [stock,setStock]=useState(1);
const handleCart=()=>{
  const item={name,price,stock};

  const existingItem=cart.findIndex(
    (item)=>item.id===id
  );

  if(existingItem)

  stock+=stock;
  setCart([...cart],item);
  console.log(cart);
}

  return (
    <div data-testid="product-card">
      <h3 data-testid="name">{name}</h3>
      <h5 data-testid="price">{price}</h5>
      <p data-testid="quantity">{stock}</p>
      <button onClick={handleCart} data-testid="add-btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
