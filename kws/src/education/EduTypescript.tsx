/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

// // 제네릭(Generics)
// // 함수를 생각하면 쉽습니다. 함수에는 '매개변수'가 있는데 그 매개변수가 안의 내용들의 타입이 된다고 생각하시면 됩니다.
// interface Backpack<Type> {
//   add: (obj: Type) => void;
//   get: () => Type;
// }

// // function 함수(매개변수) {
// //   const abc = {
// //     속성: 매개변수
// //   }
// // }

// const 어떠한객체: Backpack<number> = {
//   add: () => {
//     //
//   },
//   get: () => 1,
// };

// // interface와 type의 차이점
// // 1. interface 는 객체의 타입만 정의할 수 있지만 type 은 모든타입이 가능하다.
// type abc = string;
// interface inter {
//   abc: string;
// }
// // 2. type은 새로운 속성을 추가하기 위해서 다시 같은 이름으로 선언할 수 없지만, interface는 선언적 확장이 가능
// interface Animal {
//   weight: number;
// }

// interface Animal {
//   height: number;
// }

// const tiger: Animal = {
//   weight: 100,
//   height: 200,
// };
// console.log(tiger);

// // type _Animal = {
// //   weight: number;
// // };

// // type _Animal = {//error : 식별자가 중복됨
// //   height: string;
// // };

// // 3.computed value의 사용 유무
// type names = 'firstName' | 'lastName';

// type NameTypes = {
//   [key in names]: string;
// };

// const yc: NameTypes = { firstName: 'hi', lastName: 'yc' };

// // interface NameInterface {
// //   // error
// //   [key in names]: string // => 불가능
// // }

// // 4. 교차타입 (Intersection Types)
// type type2 = { a: 1 } & { b: 2 }; // 잘 머지됨
// type type3 = { a: 1; b: 2 } & { b: 3 }; // resolved to `never`
// const t2: type2 = { a: 1, b: 2 }; // good
// // const t3: type3 = { a: 1, b: 3 } // Type 'number' is not assignable to type 'never'.(2322)
// // const t4: type3 = { a: 1, b: 2 } // Type 'number' is not assignable to type 'never'.(2322)
// type t1 = {
//   a: number;
// };

// type t2 = t1 & {
//   b: string;
// };

// // const typeSample: t2 = { a: 1, b: 2 } // error
// interface b1 {
//   a: string;
// }
// interface b2 {
//   b: string;
// }
// const abObj: b1 & b2 = {
//   a: 'a',
//   b: 'b',
// };

// // Object의 키에 타입 선언
// // key의 값 타입 선언
// const 어떤객체 = {
//   어: '어',
//   떤: 1000,
//   객: { 썸씽: '썸씽' },
//   체: () => {},
// };

// type 따른객체키 = '어' | '떤' | '객' | '체';
// interface 따른객체인터페이스 {
//   [key: string]: string | number | { 썸씽: string } | (() => void);
// }
// type 따른객체타입 = {
//   // [key:string]: string|number|{썸씽:string}
//   // [key in 따른객체키]: string | number | { 썸씽: string } | (() => void);
//   // [key in keyof typeof 어떤객체]: string | number | { 썸씽: string } | (() => void); // => 타입추론이 가능하다.
//   [key in keyof typeof 어떤객체]: typeof 어떤객체[keyof typeof 어떤객체]; // => 타입추론이 가능하다.
// };
// type 따른객체타입똑같은타입 = typeof 어떤객체;

// const 따른객체: 따른객체타입 = { ...어떤객체 };

// // 유틸리티 타입(Utility Type)
// // 1.Partial<T>
// const Partial객체: Partial<따른객체타입> = {
//   어: '어',
//   체: () => {},
// };
// // 2.Pick<T,K>
// const Pick객체: Pick<따른객체타입, '어' | '떤'> = {
//   어: '어',
//   떤: 10000,
// };
// // 3.Omit<T,K>
// const Omit객체: Omit<따른객체타입, '어'> = {
//   떤: 9999,
//   객: { 썸씽: '썸씽2' },
//   체: () => {},
// };

// type 또따른객체타입 = Pick<typeof 어떤객체, '어'>;
// const 또따른객체: 또따른객체타입 = {
//   어: '',
// };

export default () => {
  return null;
};
