import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'service/api';

const Reviewes = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchReviewes() {
      const {
        data: { results },
      } = await getReviews(movieId);

      setReviews(results);
    }
    fetchReviewes();
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviewes;
