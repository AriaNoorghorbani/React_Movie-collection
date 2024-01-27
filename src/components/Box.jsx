import React, { useState } from "react";

export default function Box({ movies, setOpen, isOpen }) {
  return (
    <>
      <div className="box">
        <button className="btn-toggle" onClick={() => setOpen((open) => !open)}>
          {isOpen ? "–" : "+"}
        </button>
        {isOpen && (
          <ul className="list">
            {movies?.map((movie) => (
              <li key={movie.imdbID}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div>
                  <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
