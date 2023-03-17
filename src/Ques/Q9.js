import React from "react";

const products = [
  {
    id: 1,
    name: "Apple iPhone 13",
    price: 999,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 899,
    category: "Electronics"
  },
  {
    id: 3,
    name: "Sony WH-1000XM4 Wireless Headphones",
    price: 349,
    category: "Electronics"
  },
  {
    id: 4,
    name: "Fitbit Charge 5",
    price: 179,
    category: "Fitness"
  },
  {
    id: 5,
    name: "Peloton Bike",
    price: 1895,
    category: "Fitness"
  },
  {
    id: 6,
    name: "Lululemon Align Pant II",
    price: 98,
    category: "Fitness"
  },
  {
    id: 7,
    name: "Instant Pot Duo",
    price: 99,
    category: "Kitchen"
  },
  {
    id: 8,
    name: "Nespresso Vertuo Coffee and Espresso Maker",
    price: 199,
    category: "Kitchen"
  },
  {
    id: 9,
    name: "Le Creuset Dutch Oven",
    price: 399,
    category: "Kitchen"
  },
  {
    id: 10,
    name: "S'well Water Bottle",
    price: 35,
    category: "Home"
  },
  {
    id: 11,
    name: "Bose QuietComfort 35 II Wireless Headphones",
    price: 299,
    category: "Electronics"
  }
];

export default function App() {
  return (
    <div>
      <h2>Question 9</h2>
      <div className="products">
        <div className="product">
          {products.map((product) => (
            <div key={product.id} className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <p className="product-category">{product.category}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
