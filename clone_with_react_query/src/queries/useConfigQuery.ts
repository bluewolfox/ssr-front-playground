import { M_Global } from 'models/global';
import { api } from 'queries';
import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { configRecoilState } from 'state';

export const useGetConfig = () => {
  const setConfig = useSetRecoilState(configRecoilState);

  const fetch = (): Promise<M_Global.I_Config> => {
    return api.get('config/simple').then((res) => {
      setConfig(res.data.data);
      return res.data.data;
    });
  };

  return useQuery('systemConfig', fetch);
};
