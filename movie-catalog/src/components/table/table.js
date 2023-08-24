import React from "react";
import { displayUtils } from "../../utils/display-utils";

const MovieTable = ({ movies }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Genres</th>
          <th>Release Date</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{displayUtils.formatStringArray(movie.genres)}</td>
            <td>{displayUtils.formatDate(movie.releaseDate)}</td>
            <td>{movie.popularity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieTable;
