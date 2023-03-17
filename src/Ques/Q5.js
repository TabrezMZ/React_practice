const cookbook = [
  {
    id: 1,
    recipeName: "Classic Chocolate Chip Cookies",
    recipeCreatorName: "Baker Betty"
  },
  {
    id: 2,
    recipeName: "Spaghetti Bolognese",
    recipeCreatorName: "Chef Charlie"
  },
  {
    id: 3,
    recipeName: "Chicken Alfredo",
    recipeCreatorName: "Cook Carol"
  },
  {
    id: 4,
    recipeName: "Beef Stir-Fry",
    recipeCreatorName: "Chef Chris"
  },
  {
    id: 5,
    recipeName: "Vegetable Curry",
    recipeCreatorName: "Cook Cathy"
  }
];

export default function App() {
  return (
    <div className="App">
      <h2>Question 5</h2>
      <div className="cookbook">
        <h1>Cookbook</h1>
        <ul className="recipes">
          {cookbook.map((book) => (
            <li key={book.id}>
              <h2>{book.recipeName}</h2>
              <p>{book.recipeCreatorName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
