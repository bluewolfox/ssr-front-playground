/**
 * 1. 컴포넌트 : client\src\common\functions\cookie.ts
 * 2. 작성일 : 2022.07.04 / 20시 40분 25초
 * 3. 작성자 : 김원석
 * 4. 설명 : 브라우저 쿠키관련 공통로직
 */

/* eslint-disable no-useless-escape */
/* eslint-disable guard-for-in */

// 주어진 이름의 쿠키를 반환하는데,
// 조건에 맞는 쿠키가 없다면 undefined를 반환합니다.
type T_GetCookie = (name: string) => string | undefined;
const getCookie: T_GetCookie = (name: string) => {
  const matches = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`)
  );

  return matches ? decodeURIComponent(matches[1]) : undefined;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Any = any;

type T_SetCookie = (name: string, value: string, options?: { [key: string]: Any }) => void;
const setCookie: T_SetCookie = (name, value, options = {}) => {
  options = {
    path: '/',
    // 필요한 경우, 옵션 기본값을 설정할 수도 있습니다.
    ...options,
  };

  if (options.expires instanceof Date) options.expires = options.expires.toUTCString();

  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  for (const optionKey in options) {
    updatedCookie += `; ${optionKey}`;
    const optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += `=${optionValue}`;
    }
  }

  document.cookie = updatedCookie;
};

type T_DeleteCookie = (name: string) => void;
const deleteCookie: T_DeleteCookie = (name: string) => {
  setCookie(name, '', { 'max-age': -1 });
};

// 로그인이 되어있는지 확인 로직
const isAuth = () => getCookie('accessToken') && getCookie('refreshToken');

export { getCookie, setCookie, deleteCookie, isAuth };
