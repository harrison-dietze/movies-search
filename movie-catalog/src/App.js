import React, { useState } from "react";
import "./App.css";
import SearchField from "./components/search/search";
import MovieTable from "./components/table/table";
import api from "./api/api";

function App() {
  const [movies, setMovies] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleChangeQuery = async (query) => {
    try {
      setSearchQuery(query);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleSearch = async (searchQuery, param) => {
    try {
      const data = await api.fetchMovies(searchQuery, param);
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleSort = async (searchColumn, direction = "D") => {
    try {
      const data = await api.fetchMovies(
        searchQuery,
        "title",
        searchColumn,
        direction
      );
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className="App">
      <h1 className="site-title">
        <span className="animation">Movie Search App</span>
      </h1>
      <SearchField onChange={handleChangeQuery} onSearch={handleSearch} />
      <MovieTable onSort={handleSort} movies={movies} />
    </div>
  );
}

export default App;
