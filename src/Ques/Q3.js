const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 4.2
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 4.5
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rating: 4.0
  },
  {
    id: 4,
    title: "1984",
    author: "George Orwell",
    rating: 4.3
  }
];

export default function App() {
  return (
    <div className="App">
      <h2>Question 3</h2>
      <ul>
        {books.map((book) => (
          <div className="book">
            <div className="book-details">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author}</p>
              <p className="book-rating">{book.rating}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
