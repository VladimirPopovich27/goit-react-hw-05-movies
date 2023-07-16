import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CastMember } from './Cast.styled';
import { getCast } from 'services/API';
const Cast = () => {
  const PIC_URL = 'https://image.tmdb.org/t/p/w500/';
  const PLACEHOLDER = 'https://via.placeholder.com/182x273';
  const { movieId } = useParams();
  const [error, setError] = useState(null);
  const [members, setMembers] = useState('');

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getCast(movieId);
        if (data === {}) {
          throw Error('No matches found');
        }
        setMembers(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCast();
  }, [movieId]);
  console.log(error);
  const castMembers = members.cast;
  console.log(castMembers);
  return (
    <ul>
      {castMembers?.map(({ name, character, profile_path, id }) => (
        <CastMember key={id}>
          <img
            src={`${
              profile_path
                ? PIC_URL + profile_path
                : PLACEHOLDER + '?text= no image found'
            } `}
            width={120}
            alt="member of cast"
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </CastMember>
      ))}
    </ul>
  );
};
export default Cast;
