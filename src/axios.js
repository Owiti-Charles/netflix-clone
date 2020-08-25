import axios from 'axios';

const instace = axios.create(
    {
        baseURL: "https://api.themoviedb.org/3",
    }
)

export default instace;