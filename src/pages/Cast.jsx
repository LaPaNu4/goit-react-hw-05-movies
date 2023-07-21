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
        const {cast} = await GetCast(params.movieId);
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
    //               casts.map(cast => {
    //                   <div>
    //            `https://image.tmdb.org/t/p/original${img}`
    //        </div>
    //    })
          <div>cast</div>
        
      )}
    </>
  );
};
export default CastDetails;
