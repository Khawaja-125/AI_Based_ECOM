import React from "react";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  const cartItems = []; // Empty cart for now, you can populate it dynamically later.

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-lg mb-4">Your cart is empty.</p>
          <NavLink
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Continue Shopping
          </NavLink>
        </div>
      ) : (
        <div>
          {/* Render the cart items when available */}
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div>
                  <button className="bg-red-500 text-white px-4 py-2 rounded">
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-end">
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
