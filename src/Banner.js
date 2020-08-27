import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchBanner() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1) //random movie from the request
        ]
      );
      return request;
    }
    fetchBanner();
  }, []); // [] makes the rewuest runs once when the banner loads
  console.log(movie);

  return (
    <header className="banner"
    style = {{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
    }}
    >
      <div className="banner__content">
        {/* title */}
        <h1>
            {movie?.title || movie?.original_name || movie?.name}
        </h1>

        {/* div with 2 buttons play and more info */}
        <div className = "banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>

        {/* description */}

        <h1 className="banner__description">
            {movie?.overview}
        </h1>

      </div>
    </header>
  );
}

export default Banner;
