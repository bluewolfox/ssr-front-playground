import React from 'react';

// // 2. for문의 break, return, continue와 array의 methods
// const 배열 = Array(10)
//   .fill(0)
//   .map((_, i) => ({ title: `value ${i}`, value: i }));

// const 오브젝트 = { a: 'a', b: 'b', c: 'c' };

// function 썸띵() {
//   function 포문밖에있는함수() {
//     // eslint-disable-next-line no-useless-return
//     return;
//   }

//   // 간략한 for문을 사용하는 장점
//   // 중간에 loop 건너뛰기나 종료가 가능하다. (continue or break)
//   // 반복범위 컨트롤이 가능하다. (i++, i–, i+=2*i 등)
//   for (let i = 0; i < 배열.length; i++) {
//     // eslint-disable-next-line no-continue
//     if (i === 5) continue;
//     if (i === 6) 포문밖에있는함수();
//     // if (i === 7) break;
//     if (i === 8) return;
//     console.log(i);
//   }
//   // for (let i = 0; i < Object.keys(오브젝트).length; i++) {
//   //   // eslint-disable-next-line no-continue
//   //   if (i === 5) continue;
//   //   if (i === 6) 포문밖에있는함수();
//   //   // if (i === 7) break;
//   //   if (i === 8) return;
//   //   console.log(i);
//   // }

//   console.log('그다음 진행');
// }
// // console.log(`return ${썸띵()}`);

// // arrayMethods
// function 배열메서드들() {
//   // 1.map
//   const 맵 = 배열.map((item) => {
//     return item.title;
//   });
//   console.log({ 맵 });

//   // 2.forEach
//   const 포이치 = 배열.forEach((item, index) => {
//     console.log(index);

//     if (index === 2) return;

//     // eslint-disable-next-line consistent-return
//     return item.value;
//   });
//   console.log({ 포이치 });

//   // 3.filter
//   const 필터 = 배열.filter((item) => {
//     return item.value > 5;
//   });
//   console.log({ 필터 });

//   // 4.find
//   const 파인드 = 배열.find((item) => {
//     return item.value > 5;
//   });
//   console.log({ 파인드 });

//   // 5.findIndex
//   const 파인드인덱스 = 배열.findIndex((item) => {
//     return item.value > 5;
//   });
//   console.log({ 파인드인덱스 });

//   // 6.every
//   const 에브리바디 = 배열.every((item) => {
//     return item.value < 11;
//   });
//   console.log({ 에브리바디 });

//   // 7.some
//   const 썸 = 배열.some((item) => {
//     return item.value > 10;
//   });
//   console.log({ 썸 });

//   // 8.sort
//   const 정렬 = 배열.sort((a, b) => {
//     // if (a.value > b.value) return -1; // 숫자의 의미는 index의 값에 더하는 값입니다.
//     // if (a.value < b.value) return 1;

//     // 문자열로 나타내야되는경우
//     const nameA = a.title.toUpperCase(); // 대문자로 공통적용
//     const nameB = b.title.toUpperCase();

//     if (nameA > nameB) return -1; // 내림차순 -1, 오름차순 1
//     if (nameA < nameB) return 1;

//     // 큰값이 작은 값보다

//     return 0;
//   });
//   console.log({ 정렬 });

//   // 9.reduce
//   const 리듀스 = 배열.reduce((누산기, 현재값, 현재인덱스, 원본배열) => {
//     console.log({ 누산기, 현재값, 현재인덱스, 원본배열 });

//     return 누산기 + 현재값.value;
//   }, 배열[0].value);
//   console.log({ 리듀스 });
// }

// 배열메서드들();

export default () => {
  return null;
};
