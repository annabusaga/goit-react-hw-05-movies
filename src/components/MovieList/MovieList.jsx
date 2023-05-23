import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <Link key={id} to={`/movies/${id}`}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : `https://media.istockphoto.com/id/147273331/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BD%D1%94-%D0%B2%D1%96%D0%B4%D1%80%D0%BE-%D0%BF%D0%BE%D0%BF%D0%BA%D0%BE%D1%80%D0%BD%D1%83.jpg?s=2048x2048&w=is&k=20&c=EVEpgBCnZmkrieihX5eDgsssBgcGyU71woNkj5N4FiM=`
              }
              alt={title}
            />
            <h2>{title}</h2>
          </Link>
        );
      })}
    </ul>
  );
};

export default MovieList;
