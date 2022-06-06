import React, { ChangeEvent, useState, useTransition } from 'react';

const EduTransition: React.FC = (): JSX.Element => {
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();

  const onFetchSearch = (value: string) => {
    // 즉각적으로 업데이트 되어야하는 input 같은 경우는 바로 UI업데이트를 시켜준다.
    setSearchText(value);

    // fetch 되어야 되는 부분은 lazy하게 보여준다.
    startTransition(() => {
      fetch('https://reqres.in/api/users?page=2')
        .then((res) => res.json())
        .then((result) => {
          // const filterList = source.filter((item) => item.includes(value));
          setList(result.data);
        });
    });
  };

  return (
    <div className="search">
      <h2>검색어를 입력하세요.</h2>
      <input type="text" value={searchText} onChange={(e) => onFetchSearch(e.target.value)} />
      <ul className="list">
        {isPending ? (
          '로딩중입니다.'
        ) : (
          <>
            {list.map((item) => {
              return <li key={item.first_name}>{item.first_name}</li>;
            })}
          </>
        )}
      </ul>
    </div>
  );
};

export default EduTransition;
