import {
  MovieCardList,
  MovieCardLocation,
  MovieCardTitle,
  MovieCardDescribtion,
  MovieCardImg,
} from './MovieCard.styled';

const MovieCard = ({ movieDetails }) => {
  const PIC_URL = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  function getFormatDate(join) {
    join = join || ' ';

    const release = new Date(movieDetails.release_date);
    return release.getFullYear();
  }
  const formatYear = getFormatDate();

  if (!movieDetails.genres) {
    return;
  }
  const movieGenres = movieDetails.genres.map(genre => genre.name).join(', ');

  return (
    <MovieCardLocation>
      <MovieCardImg
        src={`${
          movieDetails.poster_path
            ? PIC_URL + movieDetails.poster_path
            : defaultImg
        }`}
        width={250}
        alt="poster"
      />
      <div>
        <MovieCardTitle>
          {movieDetails.original_title}({formatYear})
        </MovieCardTitle>
        <MovieCardList>
          <li>
            <p>User Score: {Math.round(movieDetails.vote_average * 10)}%</p>
          </li>
          <li>
            <MovieCardDescribtion>Overview</MovieCardDescribtion>
            <p>{movieDetails.overview}</p>
          </li>
          <li>
            <MovieCardDescribtion>Genres</MovieCardDescribtion>
            <p>{movieGenres}</p>
          </li>
        </MovieCardList>
      </div>
    </MovieCardLocation>
  );
};

export default MovieCard;
