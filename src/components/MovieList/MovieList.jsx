import { useLocation, Link } from 'react-router-dom';

const MovieList = ({ results }) => {
  const location = useLocation();
  return (
    <ul>
      {results.map(({ id, original_title, name }) => (
        <li key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {original_title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
