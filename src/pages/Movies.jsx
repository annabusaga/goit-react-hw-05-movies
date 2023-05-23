import { getSearchMovie } from 'service/api';
import { useEffect, useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const onSubmit = value => {
    setSearchValue(value.trim());
  };

  useEffect(() => {
    if (!searchValue) return;
    async function fetchMovies() {
      const {
        data: { results },
      } = await getSearchMovie(searchValue);
      console.log(results);
      setMovies(results);
    }
    fetchMovies();
  }, [searchValue]);
  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
