import { Button } from 'antd';
import { useGetLoginInfo } from 'queries/useLoginQuery';
import React, { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';

const Child = () => {
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData('checkLogin');
  console.log(data);

  return <>{JSON.stringify(data)}</>;
};

export const Main_page: React.FC = (): JSX.Element => {
  const [mount, setmount] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setmount(true);
    }, 5000);
  }, []);

  const { isFetching, isLoading, refetch } = useGetLoginInfo(mount);

  return (
    <div>
      {isFetching && <Button>isFetching</Button>}
      {isLoading && <Button>isLoading</Button>}
      <Button onClick={() => refetch()}>refetch</Button>
      Main.page
    </div>
  );
};
