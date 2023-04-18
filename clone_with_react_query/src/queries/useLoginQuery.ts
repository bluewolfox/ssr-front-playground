import { M_Global } from 'models/global';
import { Any } from 'models/index.model';
import { api } from 'queries';
import { useMutation, useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { userRecoilState } from 'state';

/** 로그인 정보 호출 */
export const useGetLoginInfo = (enabled: boolean) => {
  const setUserInfo = useSetRecoilState(userRecoilState);

  const fetch = (): Promise<M_Global.I_User | null> =>
    api.get('checkLogin').then((res) => {
      const apiData = res.data.data;
      setUserInfo(apiData);

      return apiData;
    });

  return useQuery('checkLogin', {
    queryFn: fetch,
    refetchOnWindowFocus: true,
    enabled,
  });
};

/** 로그인 */
export const useLogin = (onSuccess: () => void) => {
  const fetch = (args: { userId: string; userPasswd: string }) => api.post('loginCheck', args);

  return useMutation({
    mutationFn: fetch,
    onSuccess,
    onError: (error) => {
      console.log(error);

      const ErrorMessage = (error as Any)?.message;
      //
    },
  });
};
