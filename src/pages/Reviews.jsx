import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetReview } from 'Api/Api';

const ReviewDetails = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { results } = await GetReview(params.movieId);
        if (results) {
          setReviews(results);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [params.movieId]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : reviews.length === 0 ? (
        <p>Movie does not have a review</p>
      ) : (
        <div>
          {reviews.map(review => (
            <div key={review.id}>
              <h2>Author:{review.author}</h2>
              <p>{review.content}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ReviewDetails;