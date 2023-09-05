import {TiArrowUnsorted} from "react-icons/ti";
import React, { useState } from "react";
import {displayUtils} from "../../utils/display-utils";
import "../../index"
import "./table.css"

const MovieTable = ({ movies, onSort }) => {
    const [direction, setDirection] = useState('D');


    const handleSort = (column) => {
        console.log(direction);
        setDirection(direction === 'D' ? 'A' : 'D');
        onSort(column, direction);
        }

return (
    <div className="movie-table-container">
        <table className="movie-table">
            <thead>
            <tr>
                <th className="header-title">
                    <span>Names</span>
                    <TiArrowUnsorted
                        className="sort-icon"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleSort('title')}
                    />
                </th>
                <th className="header-genres">Genres</th>
                <th className="header-date">
                    <span>Release Date</span>
                    <TiArrowUnsorted
                        className="sort-icon"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleSort('releaseDate')}
                    />
                </th>
                <th className="header-popularity">Popularity</th>
            </tr>
            </thead>
            <tbody>
            {movies.map((movie) => (
                <tr key={movie.id}>
                    <td className="result">{movie.title}</td>
                    <td className="result">{displayUtils.formatStringArray(movie.genres)}</td>
                    <td className="result">{displayUtils.formatDate(movie.releaseDate)}</td>
                    <td className="result">{movie.popularity}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);
};

export default MovieTable;
