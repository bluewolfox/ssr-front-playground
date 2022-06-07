import React from "react";
import { ListProps } from "../App";
import { AccountBookInfo } from "./AccountBookInfo";

const AccountBookInfoList = ({ list, onRemove, onUpdate }: any) => {
  return (
    <React.Fragment>
      {list.map((l: ListProps) => {
        return (
          <AccountBookInfo
            key={l.id + l.price}
            list={l}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        );
      })}
    </React.Fragment>
  );
};

export default AccountBookInfoList;
