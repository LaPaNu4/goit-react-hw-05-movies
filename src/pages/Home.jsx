import React, { useEffect, useState } from 'react';
import { GetDayMovies } from 'Api/Api';
import { Link, useLocation } from 'react-router-dom';
import MovieList from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await GetDayMovies();
        if (data) {
          setMovies(data.results);
          // console.log(data.results);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
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
    </>
  );
};

export default Home;
