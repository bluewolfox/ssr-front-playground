import React from 'react';

export default () => {
  const arr = Array(20)
    .fill(0)
    .map((_, idx) => ({ expanded: !!(idx % 2), title: idx + 1 }));
  console.log(arr);

  return <div />;
};
