import React, { useState, useEffect } from "react";
import axios from "./axios"; 
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const image_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // code that runs based on a specific condition
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  // click event
  const handleclick = (movie) => {
    // console.log(movie?.title || movie?.original_name || movie?.name);
    if (trailerUrl) {
      setTrailerUrl('');
    } 
    else {
      movieTrailer(movie?.title || movie?.original_name || movie?.name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log(trailerUrl);
        })
        .catch((error) => console.log(error));
    }
  };
   

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id} // instant responce
            onClick={() => handleclick(movie)}
            className={`row_poster ${isLargeRow && "largePoster"}`}
            src={`${image_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
