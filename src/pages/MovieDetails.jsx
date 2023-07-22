import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import {
  Link,
  useParams,
  NavLink,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { Info } from './MovieDetails.styled';
import { GetMovie } from 'Api/Api';
// import CastDetails from './Cast';
// import ReviewDetails from './Reviews';
const CastDetails = lazy(() => import('./Cast'));
const ReviewDetails = lazy(() => import('./Reviews'));


const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await GetMovie(params.movieId);
        if (data) {
          setMovie(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [params.movieId]);

  const img = movie.poster_path;
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Link to={backLink.current}>← Go back </Link>
          <div style={{ display: 'flex', gap: '20px' }}>
            {img ? (
              <img
                src={`https://image.tmdb.org/t/p/original${img}`}
                alt={`${movie.original_title}`}
                width={'300px'}
              />
            ) : (
              <img
                src="https://www.tgv.com.my/assets/images/404/movie-poster.jpg"
                alt=""
              />
            )}
            <Info>
              <h2>{movie.original_title}</h2>
              <p>
                User Score:{Math.round(movie.vote_average.toFixed(2) * 10)}%
              </p>
              <h3>Overviev</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <div style={{ display: 'flex', gap: '10px' }}>
                {movie.genres.map(genre => (
                  <p key={genre.id}>{genre.name}</p>
                ))}
              </div>
            </Info>
          </div>
        </>
      )}
      <div>
        <h3>Additional information</h3>
        <NavLink to="Cast"> Cast</NavLink>
        <NavLink to="Reviews"> Reviews</NavLink>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="Cast" element={<CastDetails />} />
          <Route path="Reviews" element={<ReviewDetails />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default MovieDetails;
