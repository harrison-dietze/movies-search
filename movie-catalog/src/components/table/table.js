import { TiArrowUnsorted } from "react-icons/ti";
import React, { useState } from "react";
import { displayUtils } from "../../utils/display-utils";
import "../../index";
import "./table.css";

const MovieTable = ({ movies, onSort }) => {
  const [direction, setDirection] = useState("D");

  const handleSort = (column) => {
    setDirection(direction === "D" ? "A" : "D");
    onSort(column, direction);
  };

  return (
    <div className="movie-table-container table-body">
      <table className="movie-table">
        <thead className="header">
          <tr>
            <th className="title">
              <span>Names</span>
              <TiArrowUnsorted
                className="sort-icon"
                style={{ cursor: "pointer" }}
                onClick={() => handleSort("title")}
              />
            </th>
            <th className="genres">Genres</th>
            <th className="date">
              <span>Release Date</span>
              <TiArrowUnsorted
                className="sort-icon"
                style={{ cursor: "pointer" }}
                onClick={() => handleSort("releaseDate")}
              />
            </th>
            <th className="popularity">Popularity</th>
            <th className="budget">Budget
              <span>Budget</span>
              <TiArrowUnsorted
                  className="sort-icon"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSort("budget")}
              />
            </th>
            <th className="revenue">
              <span>Revenue</span>
              <TiArrowUnsorted
                  className="sort-icon"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSort("revenue")}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id} className="tr">
              <td className="title pl">{movie.title}</td>
              <td className="genres">{displayUtils.formatStringArray(movie.genres)}</td>
              <td className="date">{displayUtils.formatDate(movie.releaseDate)}</td>
              <td className="popularity">{movie.popularity}</td>
              <td className="budget">{movie.budget}</td>
              <td className="revenue">{movie.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieTable;
