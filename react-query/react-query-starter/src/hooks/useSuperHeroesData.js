import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from 'react-query';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};
const addSuperHero = (hero) => {
  return axios.post('http://localhost:4000/superheroes', hero);
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery('super-heroes', fetchSuperHeroes, {
    onSuccess,
    onError,
    // select: ({ data }) => data.map((hero) => hero.name),
  });
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addSuperHero,
    onSuccess: (data) => {
      // queryClient.invalidateQueries('super-heroes'); // query 자동 호출
      queryClient.setQueryData('super-heroes', (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });
};
