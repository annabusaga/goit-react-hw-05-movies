import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'service/api';
import css from './Cast.module.css';
import { defaultImage } from 'service/images';

const Cast = () => {
  const [casts, setCasts] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    async function cast() {
      const {
        data: { cast },
      } = await getCast(movieId);
      console.log(cast);
      setCasts(cast);
    }
    cast();
  }, [movieId]);

  return (
    <>
      {casts && (
        <ul>
          {casts.map(casts => (
            <li className={css.image} key={casts.id}>
              <img
                width={100}
                height={120}
                src={
                  casts.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${casts.profile_path}`
                    : defaultImage
                }
                alt={casts.name}
              />
              <h3>{casts.name}</h3>

              <p>Character:${casts.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
