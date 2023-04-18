/**
 * 1. 컴포넌트 : client\src\router\hoc\Decision.tsx
 * 2. 작성일 : 2022.06.15 / 22시 28분 50초
 * 3. 작성자 : 김원석
 * 4. 설명 : 라우터가 '/'로 들어왔을때 로그인 되어있는지 여부에 따라 라우터 동작 분기처리
 */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuth } from "../../common/functions/cookie";

const Decision: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth()) navigate("/main");
    else navigate("/login");
  }, [navigate]);

  return <></>;
};

export default Decision;
