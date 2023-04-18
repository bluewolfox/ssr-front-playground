/**
 * 1. 컴포넌트 : client\src\router\index.tsx
 * 2. 작성일 : 2022.06.15 / 18시 16분 23초
 * 3. 작성자 : 김원석
 * 4. 설명 : 전체 라우터에 관한 설정 파일
 */

import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import * as Pages from '../pages';
import Decision from './hoc/Decision';

const Router = () => {
  return useRoutes([
    // 처음 들어오는 화면 => accessToken이 있다면 메인, 아니면 로그인 페이지
    { path: '/', index: true, element: <Decision /> },
    // 로그인
    { path: '/login', element: <Pages.Login_page /> },
    // 메인
    { path: '/main', element: <Pages.Main_page /> },
    // 그 외의 라우터 경로는 /notFound 로 이동
    { path: '*', element: <Navigate to="/notFound" replace={false} /> },
  ]);
};

export default Router;
