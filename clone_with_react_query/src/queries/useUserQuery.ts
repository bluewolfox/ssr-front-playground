import { message } from 'antd';
import { Any } from 'models/index.model';
import { M_SettingUser } from 'models/settingUser.model';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { api, queryClient } from './index';

const orderType = (prevType: string) => {
  if (prevType === 'descend') return 'DESC';
  return 'ASC';
};
type Filter = {
  current: number;
  limit: number;
  sort: { columnKey: string; order: string };
  allSearchInfo?: string;
};
export const useGetUserList = (filter: Filter) => {
  const newFilter: Any = {
    startRow: (filter.current - 1) * filter.limit,
    pageRow: filter.limit,
    orderKey: 'regEpoch',
    orderType: 'DESC',
  };
  if (filter.allSearchInfo) newFilter['allSearchInfo'] = filter.allSearchInfo;
  if (filter.sort.columnKey) newFilter['orderKey'] = filter.sort.columnKey;
  if (filter.sort.order) newFilter['orderType'] = orderType(filter.sort.order);

  const fetch = (): Promise<M_SettingUser.I_User[]> =>
    api.get('user', { params: newFilter }).then((res) => res.data.data);

  return useQuery(['user_list', filter], { queryFn: fetch });
};

export const usePutUser = (onSuccess: () => void, onError: (err: Any) => void) => {
  const queryClient = useQueryClient();
  type T_Form = {
    userNo: number;
    userId: string;
    userPasswd: string;
    userPasswdConfirm: string;
    userName: string;
    userEmail: string;
    userTel: string;
    userStatus: number;
    userDept: string;
    userDuty: string;
    isAutolockExcept: number;
    allowAccessIp: string;
    multiLogin: number;
    additionalInfo: string;
    userRole: string;
  };
  const fetch = (data: T_Form) => api.put('user', data);

  return useMutation({
    mutationFn: fetch,
    onSuccess: () => {
      onSuccess();
      queryClient.invalidateQueries('user_list');
    },
    onError: (err) => {
      onError(err);
    },
  });
};
