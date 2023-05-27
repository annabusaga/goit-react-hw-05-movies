import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'service/api';
import css from './Cast.module.css';

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
  }, []);

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
                    : `https://media.istockphoto.com/id/147273331/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BD%D1%94-%D0%B2%D1%96%D0%B4%D1%80%D0%BE-%D0%BF%D0%BE%D0%BF%D0%BA%D0%BE%D1%80%D0%BD%D1%83.jpg?s=2048x2048&w=is&k=20&c=EVEpgBCnZmkrieihX5eDgsssBgcGyU71woNkj5N4FiM=`
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
