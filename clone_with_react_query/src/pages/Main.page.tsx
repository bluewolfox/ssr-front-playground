import { Button } from 'antd';
import { deleteCookie } from 'common/functions/cookie';
import { useGetConfig } from 'queries/useConfigQuery';
import { useGetLoginfo } from 'queries/useLoginQuery';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Main_page: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  useGetConfig();
  const { isFetching, isLoading, refetch } = useGetLoginfo();

  const onLogout = () => {
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
    navigate('/');
  };

  return (
    <div>
      <Button loading={isFetching}>isFetching</Button>
      <Button loading={isLoading}>isLoading</Button>
      <Button onClick={() => refetch()}>refetch</Button>
      <Button onClick={onLogout}>logout</Button>
      <Button onClick={() => navigate('/user')}>user</Button>
    </div>
  );
};
