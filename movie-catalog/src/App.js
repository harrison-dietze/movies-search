import React, { useState } from "react";
import "./App.css";
import SearchField from "./components/search/search";
import MovieTable from "./components/table/table";
import api from "./api/api";

function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (searchQuery) => {
    try {
      const data = await api.fetchMovies(searchQuery);
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <SearchField onSearch={handleSearch} />
      <MovieTable movies={movies} />
    </div>
  );
}

export default App;
