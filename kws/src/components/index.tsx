// 폴더

import React from 'react';
import { useQuery } from 'react-query';

const Query: React.FC = (): JSX.Element => {
  const querys = useQuery('repoData', () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then((res) => res.json())
  );
  console.log(querys);

  const { isLoading, error, data } = querys;

  if (isLoading) return <div> 'Loading...'</div>;

  if (error) return <div> 'An error has occurred: ' + {error as string}</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
};

export { Query };
