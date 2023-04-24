import { App } from 'antd';
import { api } from 'queries';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { userRecoilState } from 'state';

export const useGetLoginfo = () => {
  const setRecoil = useSetRecoilState(userRecoilState);

  const fetch = () =>
    api.get('checkLogin').then((res) => {
      setRecoil(res.data.data);
      return res.data.data;
    });

  return useQuery('checkLogin', {
    queryFn: fetch,

    refetchOnWindowFocus: true,
  });
};

/** 로그인 */
export const useLogin = (onSuccess: () => void, onError: () => void) => {
  const queryClient = useQueryClient();
  const fetch = (args: { userId: string; userPasswd: string }) => api.post('loginCheck', args);

  return useMutation({
    mutationFn: fetch,
    onSuccess: (res) => {
      onSuccess();

      queryClient.invalidateQueries('checkLogin');
      return res.data;
    },
    onError,
  });
};
