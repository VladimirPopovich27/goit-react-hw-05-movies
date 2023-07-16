import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import MovieList from 'components/MovieList';
import MoviesForm from 'components/MoviesForm/MoviesForm';
import { getMovies } from '../services/API';

const Movies = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentQuery = searchParams.get('query') ?? ' ';
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies(currentQuery);
        if (data.results.length === 0) {
          throw Error('No matches found');
        }
        setResults(data.results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovies();
  }, [currentQuery]);

  console.log(error);
  console.log(location);
  return (
    <div>
      <MoviesForm setSearchParams={setSearchParams} />
      <MovieList results={results} />
    </div>
  );
};
export default Movies;
