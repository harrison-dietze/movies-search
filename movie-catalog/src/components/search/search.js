import React, { useState } from "react";

const SearchField = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search movies..."
      />

      {/* <select></select> */}

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchField;
