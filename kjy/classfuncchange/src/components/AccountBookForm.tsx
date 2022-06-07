import React, { useState } from "react";

type SelectProps = {
  type: string;
  price: number;
  usage: string;
  date: string;
};

const AccountBookForm = ({ onAdd }: any) => {
  const [select, setSelect] = useState<SelectProps>({
    type: "지출",
    price: 0,
    usage: "",
    date: "",
  });

  const getCurrentTimeToString = () => {
    return new Date().toLocaleString();
  };

  const submitClick = (e: any) => {
    e.preventDefault();
    // console.log("click");
    // select
    // console.log(select);
    onAdd(select);
  };

  const selectChange = (
    e: React.ChangeEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLSelectElement>
  ) => {
    const target = {
      ...select, // select 의 내용을 이 자리에 복사
      [e.target.name]: e.target.value,
      date: getCurrentTimeToString(),
    };
    setSelect(target);
  };
  //   console.log(select);

  return (
    <React.Fragment>
      <form onSubmit={submitClick}>
        <select name="type" onChange={selectChange}>
          <option>지출</option>
          <option>수입</option>
        </select>
        <input
          placeholder="금액"
          type="number"
          name="price"
          value={select.price}
          onChange={selectChange}
        />
        <input
          placeholder="사용목적"
          name="usage"
          value={select.usage}
          onChange={selectChange}
        />
        <button
          //   onClick={() => {
          //     console.log("추가");
          //   }}
          type="submit"
        >
          추가
        </button>
      </form>
    </React.Fragment>
  );
};

export default AccountBookForm;
