import React from "react";
import ListItem from "./ListItem";

export default function List({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => {
        return <ListItem key={movie.imdbID} movie={movie} />;
      })}
    </ul>
  );
}
