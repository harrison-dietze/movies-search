import React, { useState } from "react";

const SearchField = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const [searchParam, setSearchParam] = useState("title");

  const handleSearch = () => {
    onSearch(searchQuery, searchParam);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search movies..."
        onKeyPress={(e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        }}
      />

      <label>Field Name</label>
      <select
        onChange={(e) => {
          setSearchParam(e.target.value);
        }}
      >
        <option value={"title"}>Title</option>
        <option value={"tagline"}>Tagline</option>
        <option value={"overview"}>Overview</option>
      </select>

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchField;
