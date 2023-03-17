const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    category: "Category A"
  },
  {
    id: 2,
    name: "Product 2",
    price: 24.99,
    category: "Category B"
  },
  {
    id: 3,
    name: "Product 3",
    price: 5.99,
    category: "Category A"
  },
  {
    id: 4,
    name: "Product 4",
    price: 19.99,
    category: "Category C"
  }
];

export default function App() {
  return (
    <div className="App">
      <h2>Question 2</h2>
      <ul>
        {products.map((product) => (
          <div className="product" key={product.id}>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <p className="product-category">{product.category}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
