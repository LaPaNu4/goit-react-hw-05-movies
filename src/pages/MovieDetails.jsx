import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetMovie } from 'Api/Api';
import { Info } from './MovieDetails.styled';
import { NavLink, Routes, Route } from 'react-router-dom';
import CastDetails from './Cast';

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
  }, [params.movieId]);

  const img = movie.poster_path;
  // console.log(params);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
            <p>User Score:{Math.round(movie.vote_average.toFixed(2) * 10)}%</p>
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
      )}
      <div>
        <h3>Additional information</h3>
        <NavLink to="Cast"> Cast</NavLink>
        <NavLink to="Reviews"> Reviews</NavLink>
      </div>
      <Routes>
        <Route path="Cast" element={<CastDetails/>} />
        <Route path="Reviews" element={<div>Reviews</div>} />
      </Routes>
    </>
  );
};
export default MovieDetails;
