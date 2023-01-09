import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superHeroes');
};
const fetchFriends = () => {
  return axios.get('http://localhost:4000/friends');
};

export const RQParallelPage = () => {
  const { data } = useQuery('super-heroes', fetchSuperHeroes);
  // const {data} =- useQuery('friends', fetchFriends);

  return (
    <>
      <h2>ParallelQueriesPage</h2>
    </>
  );
};
