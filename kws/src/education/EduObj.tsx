import { cloneDeep } from 'lodash';
import React from 'react';

// 1. 객체의 깊은복사(Deep Copy)와 얕은복사(Shallow Copy)
const 원본 = {
  num: 1000,
  bool: true,
  str: 'test',
  somethingMethod() {
    console.log('func');
  },
  obj: { x: 1, y: 2 },
  arr: ['A', 'B', 'C'],
  arr2: [
    { title: 'A', value: 11 },
    { title: 'B', value: 22 },
    { title: 'C', value: 33 },
    { title: 'D', value: 44 },
  ],
};

// 참조(reference) 할당
const 복사본1 = 원본;

// // 하지만 우린 Immutable(불변성)을 지켜야합니다. (원본이 바뀌면 위험하기 때문.)

// Object.assign을 이용해서 복사하는 방법
// eslint-disable-next-line prefer-object-spread
const 복사본2 = Object.assign({}, 원본);
// 복사본2.str = '김원석';
// 복사본2.obj.x = 100; // => 얕은복사

// 스프레드 연산자(spread operator)를 이용해서 복사하는 방법
const 복사본3 = { ...원본 };
// 복사본3.str = '김원석';
// 복사본3.obj.x = 100; // => 얕은복사
// console.log({ 원본 });

// 최상위 레벨의 속성만 복사를 한다.
// Deep Copy
const 복사본4 = JSON.parse(JSON.stringify(원본)); // => 깊은 복사, 하지만 function 타입들은 JSON에 없기떄문에 누락된다. (오래걸림. 웬만해선 잘 못느낌)
// 복사본4.arr.push('D');
// 복사본4.obj['z'] = 3;
// console.log({ 원본, 복사본4 });

// JSON에는 함수 데이터 타입이 없기때문에 함수 속성들은 누락된다.
// 오래걸림.

function 복제함수(source: any) {
  const target: any = {};

  // eslint-disable-next-line guard-for-in
  for (const i in source) {
    const value = source[i];
    if (value === null) target[i] = value;
    else if (typeof value === 'object') {
      if (Array.isArray(value)) {
        // eslint-disable-next-line @typescript-eslint/no-array-constructor
        const newArray = new Array();
        for (let i = 0; i < value.length; i++) {
          newArray.push(value[i]);
        }
        target[i] = newArray;
      } else {
        target[i] = 복제함수(value);
      }
    } else {
      target[i] = value;
    }
  }
  return target;
}

const 복사본5 = 복제함수(원본);

// 원본.arr2.push({ title: 'E', value: 55 });
// 원본.arr.push('D');
복사본5.somethingMethod = function () {
  console.log('안녕');
};
원본.somethingMethod();
복사본5.somethingMethod();

// 오픈소스 lodash.cloneDeep;
const 복사본6 = cloneDeep(원본);
console.log({ 원본, 복사본6 });

const someThing작업 = (params: { [key: string]: any }) => {
  params.str = '김원석';
};

// 왜 우리가 복사를 알아야할까.
async function onGetParams(params: { [key: string]: any }) {
  someThing작업(params);

  // api post 호출
  // const response = await api.request('post','/api/v1/somethingPost',params)
}
// onGetParams(복사본1);

export default () => null;
