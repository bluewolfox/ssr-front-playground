import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;

const LoadingBack = styled.div`
  background: #000;
  opacity: 0.6;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
`;
const SpinWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading: React.FC<{ loading?: boolean; size?: number }> = ({ loading, size }) => {
  if (!loading) return <></>;

  return (
    <LoadingWrapper>
      <SpinWrap>
        <Spin indicator={<LoadingOutlined color="#" style={{ fontSize: size ?? 50 }} spin={loading} />} />
      </SpinWrap>
      <LoadingBack />
    </LoadingWrapper>
  );
};
