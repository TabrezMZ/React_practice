const cars = [
  { id: 1, make: "Toyota", model: "Corolla", price: 18000 },
  { id: 2, make: "Honda", model: "Civic", price: 20000 },
  { id: 3, make: "Nissan", model: "Sentra", price: 15000 },
  { id: 4, make: "Ford", model: "Mustang", price: 35000 },
  { id: 5, make: "Chevrolet", model: "Camaro", price: 40000 }
];

export default function App() {
  return (
    <div className="App">
      <h2>Question 6</h2>
      <h1>Cars for Sale</h1>
      <ul className="car">
        {cars.map((car) => (
          <li className="details">
            <h3>{car.make}</h3>
            <p>{car.model}</p>
            <p>{car.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
