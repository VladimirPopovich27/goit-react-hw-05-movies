import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList';
import HomeTitle from './Home.styled';
import { getTopMovies } from 'services/API';
const Home = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchHomeMovie = async () => {
      try {
        const data = await getTopMovies();
        if (data.results.length === 0) {
          throw Error('No matches found');
        }
        setResults(data.results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchHomeMovie();
  }, []);
  console.log(error);

  return (
    <>
      <HomeTitle>Trending Movies</HomeTitle>
      <MovieList results={results} />
    </>
  );
};

export default Home;
