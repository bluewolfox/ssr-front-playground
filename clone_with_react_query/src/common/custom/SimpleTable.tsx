/**
 * 1. 컴포넌트 : client\src\common\custom\SimpleTable.tsx
 * 2. 작성일 : 2023.02.17 / 13시 06분 20초
 * 3. 설명 : 간단한 테이블 (왼쪽에 table_header가 있다)
 */

import classNames from 'classnames';
import React from 'react';
import './SimpleTable.scss';

interface Props {
  data: { label: string | React.ReactNode; value: string | React.ReactNode; half?: boolean }[];
  style?: React.CSSProperties;
  className?: string;
}

export const SimpleLeftColumnTable: React.FC<Props> = ({ data, style, className }): JSX.Element => {
  return (
    <div className={classNames('simple-table-left', [className])} style={{ ...style }}>
      {data.map((col, idx) => {
        return (
          <div className="row_col" style={{ width: col.half ? '50%' : '100%' }} key={idx}>
            <div className="col_label">{col.label}</div>
            <div className="col_value">{col.value}</div>
          </div>
        );
      })}
    </div>
  );
};

interface S_Props {
  data: { label: string | React.ReactNode; th?: boolean }[][];
  style?: React.CSSProperties;
  className?: string;
}
export const SimpleTable: React.FC<S_Props> = ({ data, style, className }): JSX.Element => {
  return (
    <div className={classNames('simple-table-box', [className])} style={{ ...style }}>
      {data.map((group, index) => {
        return (
          <div className="row_group" key={index}>
            {group.map((item, idx) => {
              return (
                <div key={`${index}-${idx}`} className={classNames('row_item', { th: item.th })}>
                  {item.label}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
