import React, { useState } from "react";
import "./App.css";
import AccountBookForm from "./components/AccountBookForm";
import AccountBookInfoList from "./components/AccountBookInfoList";

interface Init {
  list: ListProps[];
  keyword: string;
}

export type ListProps = {
  id: number;
  type: string;
  price: number;
  usage: string;
  data: string;
};

function App() {
  const [list, setlist] = useState([
    {
      id: 1,
      type: "지출",
      price: 3800,
      usage: "점심 식대",
      data: "2022. 05. 31 오후 13:12:33",
    },
  ]);
  const [searchState, setSearchState] = useState("");

  const searchChange = (e: any) => {
    setSearchState(e.taget.value);
  };

  const onAdd = (data: ListProps) => {
    setlist([...list, { ...data }]);
  };
  const onRemove = (id: number) => {
    setlist(list.filter((l) => l.id !== id));
  };
  const onUpdate = (id: number, data: ListProps) => {
    setlist(list.map((i) => (id === i.id ? { ...i, ...data } : i)));
  };

  return (
    <React.Fragment>
      <AccountBookForm onAdd={onAdd} />
      <p>
        <input placeholder="검색어를 입력하세요." onChange={searchChange} />
      </p>
      <AccountBookInfoList
        list={list}
        onRemove={onRemove}
        onUpdate={onUpdate}
      />
    </React.Fragment>
  );
}

export default App;
