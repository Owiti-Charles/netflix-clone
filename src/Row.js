import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
const image_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow}) {
  const [movies, setMovies] = useState([]);

  // code that runs based on a specific condition
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
//   console.table(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id} // instant responce 
            className={`row_poster ${isLargeRow && 'largePoster'}`}
            src={`${image_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;