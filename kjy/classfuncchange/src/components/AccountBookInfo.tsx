import React from "react";
import { useState } from "react";

type SelectProps = {
  type: string;
  price: number;
  usage: string;
  date: string;
};

export const AccountBookInfo = ({ list, onRemove, onUpdate }: any) => {
  const { id, type, price, usage, date } = list;
  const [isEdit, setIsEdit] = useState(false);
  const [select, setSelect] = useState<SelectProps>(list);

  const editBtn = () => {
    setIsEdit(!isEdit);
  };

  const getCurrentTimeToString = () => {
    return new Date().toLocaleString();
  };

  const editClick = (e: any) => {
    e.preventDefault();
    onUpdate(id, select);
    setIsEdit(false);
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

  const handleQuitEdit = () => {
    setIsEdit(false);
  };

  const toCommaString = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <React.Fragment>
      {isEdit ? (
        <React.Fragment>
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
          <button onClick={editClick}>적용</button>
          <button onClick={handleQuitEdit}>수정취소</button>
        </React.Fragment>
      ) : (
        <div>
          <div>{type}</div>
          <div>{toCommaString(price)}원</div>
          <div>{usage}</div>
          <div>{date}</div>
          <button onClick={editBtn}>수정</button>
          <button onClick={() => onRemove(id)}>삭제</button>
        </div>
      )}
    </React.Fragment>
  );
};
