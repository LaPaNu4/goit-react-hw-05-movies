import { useState, useEffect}  from "react";
import { useParams } from "react-router-dom";
import { GetMovie } from "Api/Api";
// https://image.tmdb.org/t/p/original/
const MovieDetails = () => {
    const [movie, setMovie] = useState([]);
     const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
     useEffect(() => {
       const fetchMovies = async () => {
         try {
           const data = await GetMovie(params.movieId);
           if (data) {
             setMovie(data);
             console.log(data);
             setIsLoading(false);
           }
         } catch (error) {
           console.error(error);
           setIsLoading(false);
         }
       };
       fetchMovies();
     }, []);


console.log(params);
    return (<>
        <h2>movieDetails</h2>
    </>)
}
export default MovieDetails;