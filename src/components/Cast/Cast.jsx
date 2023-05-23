import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'service/api';

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
            <li>
              <img />
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
