import { getTrendMovies } from 'service/api';
import { useEffect, useState } from 'react';
import css from './Home.module.css';

import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const {
        data: { results },
      } = await getTrendMovies();
      setMovies(results);
    }
    fetchMovies();
  }, []);

  return (
    <div className={css.div}>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
