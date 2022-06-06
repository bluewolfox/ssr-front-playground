import React, { useEffect, useRef, useState } from 'react';

const 축구선수리스트 = Array(1000)
  .fill('손흥민')
  .map((name, i) => `${name}${i + 1}`);

export const EduInfinityLoading: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<string[]>(() => {
    return [...축구선수리스트].slice(0, 20);
  });
  const target = useRef<HTMLLIElement>(null);

  const loadHandler = (listCount: number) => {
    setLoading(true);

    setTimeout(() => {
      const addList = [...축구선수리스트].slice(list.length, list.length + listCount);
      const loadList = [...list, ...addList];
      setList(loadList);
      setLoading(false);
    }, 500);
  };

  const intersectionObserver = new IntersectionObserver((entries) => {
    const item = entries[0];

    if (item.isIntersecting && !loading && 축구선수리스트.length > list.length) loadHandler(20);
  });

  useEffect(() => {
    if (target && target.current) intersectionObserver.observe(target.current);
    return () => {
      if (target.current) intersectionObserver.unobserve(target.current as HTMLLIElement);
    };
  }, [target, list]);

  return (
    <div style={{ fontSize: 40, position: 'relative' }}>
      {list.map((item, index) => {
        return (
          <li key={item} ref={list.length - 1 === index ? target : undefined}>
            {item}
          </li>
        );
      })}
      {loading && <div>로딩중...</div>}
    </div>
  );
};
