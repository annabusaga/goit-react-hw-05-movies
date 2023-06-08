import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getDetaildMovie } from 'service/api';
import { Suspense, useEffect, useState } from 'react';
import { useRef } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  console.log(backLinkLocationRef);
  console.log(movie);

  useEffect(() => {
    async function fetchDetaildMovie() {
      const { data } = await getDetaildMovie(movieId);
      setIsLoading(true);

      try {
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDetaildMovie();
  }, [movieId]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {movie && (
        <>
          <Link to={backLinkLocationRef.current}>Go back</Link>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h1>{movie.title}</h1>
          <h2>User Score:</h2>
          <p>{movie.vote_average}</p>
          <h2>Overwiew</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{movie.genres.map(({ name }) => name).join(', ')}</p>
          <h2>Additional Information</h2>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
