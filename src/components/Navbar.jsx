import React, { useState } from "react";

export default function Navbar({ movies, setQuery, query }) {
  // const [query, setQuery] = useState("");

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => handleSearch(e)}
      />
      {movies && (
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      )}
    </nav>
  );
}
