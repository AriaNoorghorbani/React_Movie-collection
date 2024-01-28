import React from "react";
import Box from "./Box";
import ListItem from "./ListItem";

export default function MovieList({ isOpen, setIsOpen, movies }) {
  return (
    <Box setIsOpen={setIsOpen} isOpen={isOpen}>
      {isOpen && (
        <ul className="list">
          {movies?.map((movie) => (
            <ListItem movie={movie} key={movie.imdbID} />
          ))}
        </ul>
      )}
    </Box>
  );
}
