import { useQuery } from 'react-query';
import { api } from './index';

export const useGetUserList = () => {
  const fetch = () => api.get('user').then((res) => res.data.data);

  return useQuery(['user_list'], { queryFn: fetch });
};
