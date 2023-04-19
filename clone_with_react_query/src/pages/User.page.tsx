import { Table } from 'common/custom/Table';
import { useGetUserList } from 'queries/useUserQuery';
import React from 'react';
import './User.page.scss';

export const User_page: React.FC = (): JSX.Element => {
  const { data, isLoading } = useGetUserList();

  return (
    <div id="user">
      <div className="filter">필터영역</div>
      <Table dataSource={data} loading={isLoading} />
    </div>
  );
};
