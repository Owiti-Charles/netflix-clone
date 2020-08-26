import React, {useState, useEffect} from 'react';
import axios from './axios';

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    // code that runs based on a specific condition
    useEffect(() => {
        async function  fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    }, [fetchUrl]); 
    console.table(movies);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map( movie => (
                    <img src={movie.poster_path} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row

