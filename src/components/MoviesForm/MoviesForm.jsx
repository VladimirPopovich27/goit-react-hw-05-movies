import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MovieInput, MovieForm } from './MoviesForm.styled';

const MoviesForm = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');
  const handelSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
    setQuery('');
  };
  const updateQueryString = evt => {
    setQuery(evt.target.value.toLowerCase());
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ currentQuery: evt.target.value });
  };

  return (
    <MovieForm onSubmit={handelSubmit}>
      <MovieInput
        type="text"
        placeholder="Search by name "
        value={query}
        autoComplete="off"
        onChange={updateQueryString}
      />
      <button type="submit" disabled={!query}>
        <FaSearch style={{ width: 24, height: 24 }} />
      </button>
    </MovieForm>
  );
};

export default MoviesForm;
