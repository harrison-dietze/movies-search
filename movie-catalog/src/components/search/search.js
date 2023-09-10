import React, { useState } from "react";
import "./search.css";

const SearchField = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const [searchParam, setSearchParam] = useState("title");

  const handleSearch = () => {
    onSearch(searchQuery, searchParam);
  };

  return (
      <div className="main_div">
        <div className="group">
          <input
            required="required"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            /*placeholder="Search movies..."*/
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleSearch();
                }
            }}
          />
          <label>Field Name</label>
        </div>

        <div className="padding-left">
         <select
            onChange={(e) => {
              setSearchParam(e.target.value);
            }}
          >
            <option value={"title"}>Title</option>
            <option value={"tagline"}>Tagline</option>
            <option value={"overview"}>Overview</option>
          </select>
        </div>
        <div className="padding-left">
            <button onClick={handleSearch}>Search</button>
        </div>

      </div>
  );
};

export default SearchField;
