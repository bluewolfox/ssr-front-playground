import { InstagramFilled, SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { SorterResult } from 'antd/es/table/interface';
import { ModalWrapper } from 'common/custom/Modal';
import { Table } from 'common/custom/Table';
import { Any } from 'models/index.model';
import { M_SettingUser } from 'models/settingUser.model';
import { useGetUserList } from 'queries/useUserQuery';
import React, { useState } from 'react';
import { Modal_User } from './Modal_User';
import './User.page.scss';

export const totalCount = (data: Any[]) => {
  if (data && data.length) return data[0].rowNum;
  return 0;
};

export const User_page: React.FC = (): JSX.Element => {
  const [pagination, set_pagination] = useState({ current: 1, limit: 10 });
  const [sort, set_sort] = useState({ columnKey: 'regEpoch', order: 'descend' });
  const [allSearchInfo, set_allSearchInfo] = useState('');

  const { data, isFetching } = useGetUserList({ ...pagination, sort, allSearchInfo });

  return (
    <div id="user">
      <center>
        <div className="filter">
          <Input
            placeholder="사용자 검색"
            addonBefore={<SearchOutlined />}
            style={{ width: 300 }}
            onPressEnter={(e) => set_allSearchInfo((e.target as HTMLInputElement).value)}
          />
        </div>
        <Table
          onChange={(pagination, filters, sorter) => {
            const sort = sorter as SorterResult<object>;

            set_sort({ columnKey: sort.columnKey as string, order: sort.order as string });
          }}
          dataSource={data}
          columns={[
            {
              ellipsis: true,
              title: '권한',
              dataIndex: 'userType',
              key: 'userType',
              sorter: true,
              render: (value) => {
                if (value === 1) return '관리자';
                if (value === 101) return '일반 사용자';
                return value || '-';
              },
            },
            {
              ellipsis: true,
              title: '아이디',
              dataIndex: 'userId',
              key: 'userId',
              sorter: true,
              render: (value) => {
                return value || '-';
              },
            },
            {
              ellipsis: true,
              title: '이름',
              dataIndex: 'userName',
              key: 'userName',
              sorter: true,
              render: (value) => {
                return value || '-';
              },
            },
            {
              ellipsis: true,
              title: '이메일',
              dataIndex: 'userEmail',
              key: 'userEmail',
              sorter: true,
              render: (value) => {
                return value || '-';
              },
            },
            {
              ellipsis: true,
              title: '연락처',
              dataIndex: 'userTel',
              key: 'userTel',
              sorter: true,
              render: (value) => {
                return value || '-';
              },
            },
            {
              ellipsis: true,
              title: '부서',
              dataIndex: 'userDept',
              key: 'userDept',
              sorter: true,
              render: (value) => {
                return value || '-';
              },
            },
            {
              ellipsis: true,
              title: '직급',
              dataIndex: 'userDuty',
              key: 'userDuty',
              sorter: true,
              render: (value) => {
                return value || '-';
              },
            },
            {
              ellipsis: true,
              title: '추가정보',
              dataIndex: 'additionalInfo',
              key: 'additionalInfo',
              sorter: true,
              render: (value) => {
                return value || '-';
              },
            },
            {
              ellipsis: true,
              title: '상태',
              dataIndex: 'userStatus',
              key: 'userStatus',
              sorter: true,
              render: (value) => {
                if (value === 1) return '정상';
                if (value === 2) return '중지';
                if (value === 3) return '잠김';
                return value || '-';
              },
            },
            {
              ellipsis: true,
              title: '로그인 실패',
              dataIndex: 'loginFailCountStr',
              key: 'loginFailCountStr',
              sorter: true,
              render: (value) => {
                return value || '-';
              },
            },
            {
              ellipsis: true,
              title: '자동 잠김 예외',
              dataIndex: 'isAutolockExcept',
              key: 'isAutolockExcept',
              sorter: true,
              render: (value) => {
                return value === 1 ? '사용' : '사용 안함';
              },
            },
            {
              title: '중복 로그인',
              dataIndex: 'multiLogin',
              key: 'multiLogin',
              ellipsis: true,
              sorter: true,
              render: (value) => {
                return value === 1 ? '허용' : '허용 안함';
              },
            },
            {
              title: 'AD 연동',
              dataIndex: 'isAdUser',
              key: 'isAdUser',
              sorter: true,
              render: (value) => {
                return value === 1 ? '연동' : '연동 안함';
              },
            },
            {
              ellipsis: true,
              title: '비밀번호 변경일시',
              dataIndex: 'pwModifyDateStr',
              key: 'pwModifyDateStr',
              sorter: true,
              render: (value) => {
                return value || '-';
              },
            },
            {
              render: (_, rowData) => {
                return (
                  <ModalWrapper content={<Modal_User data={rowData as M_SettingUser.I_User} />}>
                    <Button>수정</Button>
                  </ModalWrapper>
                );
              },
            },
          ]}
          rowKey="rowNum"
          loading={isFetching}
          pagination={{
            ...pagination,
            total: totalCount(data || []),
            pageSize: pagination.limit,
            onChange(page) {
              set_pagination((prev) => ({
                ...prev,
                current: page,
              }));
            },
          }}
        />
      </center>
    </div>
  );
};
