import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import MyList from "./components/MyList";
import Navbar from "./components/Navbar";

const tempMovieData = [];

const API = "http://www.omdbapi.com/?apikey=3f9130e2";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [fetching, setFetching] = useState(false);
  const [isOpen, setIsOpen] = useState({
    movieList: true,
    myList: true,
  });
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      setFetching(true);
      const res = await fetch(`${API}&s=${query}`);
      const resData = await res.json();
      setMovies(resData.Search);
      setFetching(false);
    }
    fetchMovies();
  }, [query]);

  function toggleMovieList() {
    setIsOpen((prevState) => ({
      ...prevState,
      movieList: !prevState.movieList,
    }));
  }

  function toggleMyList() {
    setIsOpen((prevState) => ({ ...prevState, myList: !prevState.myList }));
  }

  function handleSearch(query) {
    setQuery(query);
  }

  return (
    <>
      <Navbar movies={movies} setQuery={handleSearch} query={query} />

      <main className="main">
        {fetching && <p>Loading...</p>}
        <MovieList
          isOpen={isOpen.movieList}
          setIsOpen={toggleMovieList}
          movies={movies}
        />

        <MyList isOpen={isOpen.myList} setIsOpen={toggleMyList} />
        {/* <Stars maxLength={10} /> */}
      </main>
    </>
  );
}
