import { useRef, Suspense, useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import MovieCard from 'components/MovieCard/MovieCard';
import { AditionalTitle } from './MovieDetails.styled';
import { getMovieDetails } from 'services/API';

const MovieDetails = () => {
  const [error, setError] = useState(null);
  const [movieDetails, setMovieDetails] = useState('');
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        if (data === {}) {
          throw Error('No matches found');
        }
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovieDetails();
  }, [movieId]);
  console.log(error);
  console.log(location);
  return (
    <>
      <Link to={backLinkLocationRef.current}>Back to Movies</Link>
      <MovieCard movieDetails={movieDetails} />
      <AditionalTitle>Aditional information</AditionalTitle>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
