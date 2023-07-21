import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetCast } from 'Api/Api';

const CastDetails = () => {
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { cast } = await GetCast(params.movieId);
        if (cast) {
          setCasts(cast);
          console.log(cast);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [params.movieId]);

  // console.log(params);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {casts.map(cast => {
              return (
                <div key={cast.id} >
                  {cast.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                      alt={`${cast.original_name}`}
                      width={'100px'}
                    />
                  ) : (
                    <img
                      src="https://www.tgv.com.my/assets/images/404/movie-poster.jpg"
                      alt=""
                      width={'100px'}
                    />
                  )}
                  <p>{cast.original_name}</p>
                  <p>{cast.character}</p>
                </div>
              );
          })}
        </div>
        //   <div>cast</div>
      )}
    </>
  );
};
export default CastDetails;
