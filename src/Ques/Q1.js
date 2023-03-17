import React from "react";

const moviesWatchlist = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    director: "Frank Darabont"
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola"
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan"
  },
  {
    id: 4,
    title: "Forrest Gump",
    director: "Robert Zemeckis"
  },
  {
    id: 5,
    title: "Inception",
    director: "Christopher Nolan"
  }
];

export default function movieWatchlists() {
  return (
    <div>
      <h3>Question 1</h3>
      <h2>Movies Watchlist</h2>
      <ul>
        {moviesWatchlist.map((movie) => (
          <li key={movie.id}>
            Title : <button>{movie.title}</button> , Director :{" "}
            <button>{movie.director}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
