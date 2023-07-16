import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ReviewElement } from './Reviews.styled';
import { getReviews } from 'services/API';
const Reviews = () => {
  const { movieId } = useParams();
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState('');
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews(movieId);
        if (data === {}) {
          throw Error('No matches found');
        }
        setReviews(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchReviews();
  }, [movieId]);
  const authorReviews = reviews.results;
  console.log(error);
  return (
    <ul>
      {authorReviews?.map(({ id, author, content }) => (
        <ReviewElement key={id}>
          <p>Author: {author}</p>
          <p>{content}</p>
        </ReviewElement>
      ))}
    </ul>
  );
};
export default Reviews;
