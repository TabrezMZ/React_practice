import React from "react";

const items = [
  { id: 1, name: "Book", price: 10 },
  { id: 2, name: "T-Shirt", price: 15 },
  { id: 3, name: "Hat", price: 8 },
  { id: 4, name: "Sunglasses", price: 12 }
];

const total = 45;

export default function ShoppingCart() {
  return (
    <div>
      <h1>Question : 0 , Shopping Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}: ({item.price})
          </li>
        ))}
      </ul>
      <p>Total: {total}</p>
    </div>
  );
}
