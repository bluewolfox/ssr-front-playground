import React from 'react';

export const Child: React.FC<{ userId: string }> = ({ userId }) => {
  return <>{userId}</>;
};
