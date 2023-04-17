import React from 'react';

const CartComponent = ({ products }) => {
  return <h2 data-testid="empty-text">The cart is empty!</h2>;

  return (
    <div data-testid="cart-container">
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Price</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody data-testid="cart-body">
          {/* map thorugh tht cart items and display in rows */}
          <tr>
            <td>{products.name}</td>
            <td>{products.price}</td>
            <td>Total</td>
            <td data-testid="total-price"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  
  


};
export default CartComponent;
