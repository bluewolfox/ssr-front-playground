/**
 * 1. 컴포넌트 : client\src\common\custom\Table.tsx
 * 2. 작성일 : 2023.02.17 / 13시 35분 18초
 * 3. 설명 : 커스텀 테이블
 */

import { Table as Antd_Table, TableProps } from 'antd';
import classNames from 'classnames';
import { cloneDeep } from 'lodash';
import './Table.scss';

const { Summary } = Antd_Table;

type Props = TableProps<object> & {
  noborder?: boolean;
};

const config: Props = {
  pagination: {
    size: 'small',
    position: ['bottomCenter'],
    defaultPageSize: 50,
  },
  rowKey: 'rnum',
};

export function Table(props: Props): JSX.Element {
  if (props.columns) {
    props.columns.forEach((item) => {
      item.className = '';
      const clone = cloneDeep(item);
      if (!clone.align) item.align = 'center';
      const className = classNames([clone.className, clone.key]);
      item.className = className;
    });
  }

  let classes = '';
  if (props.noborder) {
    classes = 'no_border__table';
  }

  return <Antd_Table className={classNames({ [classes]: !!classes })} {...config} {...props} />;
}

export const TableSummary = Summary;
