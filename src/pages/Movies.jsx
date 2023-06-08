import { getSearchMovie } from 'service/api';
import { useEffect, useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState(null);

  const [params, setParams] = useSearchParams();
  const [searchValue] = useState(params.get('query') ?? '');

  const onSubmit = value => {
    setParams({ query: value });
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
