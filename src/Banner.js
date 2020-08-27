import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

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

  function truncate(str, n){
      return str?.length > n ? str.substr(0, n-1) + "...": str;
  } // function to trancate a string 

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        {/* title */}
        <h1 className="banner_title">
          {" "}
          {movie?.title || movie?.original_name || movie?.name}
        </h1>
        {/* description */}

        <h2 className="banner__description">{truncate(movie?.overview, 160)}</h2>

        {/* div with 2 buttons play and more info */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button_list">My List</button>
        </div>
      </div>
      <div className="banner__fade"/>
    </header>
  );
}

export default Banner;
