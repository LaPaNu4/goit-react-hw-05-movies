import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GetSearchMovies } from 'Api/Api';
import MovieList from './Home.styled';
import { Link, useLocation } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie = searchParams.get('query');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (!searchMovie) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const fetchMovies = async () => {
      try {
        const data = await GetSearchMovies(searchMovie);
        if (data) {
          setMovies(data.results);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [searchMovie]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.target.children.search.value;
    setSearchParams({
      query: searchValue,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Enter movie name"
          required
        />
        <button type="submit">Search</button>
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <MovieList>
          {movies.map(movie => (
            <Link
              state={{ from: location }}
              key={movie.id}
              to={`/Movies/${movie.id}`}
            >
              {movie.title}
            </Link>
          ))}
        </MovieList>
      )}
    </div>
  );
};
export default Movies;
