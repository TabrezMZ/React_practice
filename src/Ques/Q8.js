import React from "react";

const watchlist = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    runtime: 142
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    runtime: 175
  },
  {
    id: 3,
    title: "The Godfather: Part II",
    director: "Francis Ford Coppola",
    runtime: 202
  },
  {
    id: 4,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    runtime: 152
  },
  { id: 5, title: "12 Angry Men", director: "Sidney Lumet", runtime: 96 },
  {
    id: 6,
    title: "Schindler's List",
    director: "Steven Spielberg",
    runtime: 195
  },
  {
    id: 7,
    title: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    runtime: 201
  },
  { id: 8, title: "Pulp Fiction", director: "Quentin Tarantino", runtime: 154 },
  {
    id: 9,
    title: "The Good, the Bad and the Ugly",
    director: "Sergio Leone",
    runtime: 177
  },
  { id: 10, title: "Fight Club", director: "David Fincher", runtime: 139 },
  { id: 11, title: "Forrest Gump", director: "Robert Zemeckis", runtime: 142 }
];

export default function App() {
  return (
    <div>
      <h2>Question 8</h2>
      <div className="movie-container">
        <div className="movie-list">
          <h2>Watchlist</h2>
          <ul>
            {watchlist.map((movie, i) => (
              <li>
                <div
                  style={{
                    backgroundColor: i % 2 === 0 ? "#4ade80" : "#bbf7d0"
                  }}
                  className="movie-card"
                >
                  <div className="movie-title">{movie.title}</div>
                  <div claclassNamess="movie-info">
                    <div className="director">
                      Directed by: {movie.director}
                    </div>
                    <div className="runtime">Runtime: {movie.runtime}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
