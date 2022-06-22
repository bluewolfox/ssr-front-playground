import React, { useCallback, useEffect, useMemo, useState } from 'react';

const List: React.FC<{ getItems: () => number[] }> = React.memo(({ getItems }) => {
  const [items, setItems] = useState<number[]>([]);

  console.log('List rendering');

  useEffect(() => {
    setItems(getItems());
    console.log('숫자가 변동되었습니다.');
  }, [getItems]);

  return (
    <>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  );
});

export const EduUseMemoCallback: React.FC = (): JSX.Element => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#333',
  };

  return (
    <div style={theme}>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value, 10))} />
      <button type="button" onClick={() => setDark((prevDark) => !prevDark)}>
        테마 변경
      </button>
      <List getItems={getItems} />
    </div>
  );
};
