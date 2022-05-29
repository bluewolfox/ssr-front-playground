import React from 'react';

// `||` OR 연산자
const fir = true;
const sec = false;

if (fir || sec) console.log('OR :', true);
if (fir && sec) console.log('AND :', true);

const first = 'first';
const second = 'second';
const third = null;

const result1 = first || second || third;
const result2 = second || first || second;
const result3 = third || second || first;

// `??` Null 병합 연산자
let a: any = 'a는 널이 아닌 값';
let test1 = a ?? '대체 값';

a = null;
test1 = a ?? '대체 값';

const 첫번째 = false;
const 두번째 = '이';
const 세번째 = '삼';
const 네번째 = null;

// console.log(첫번째 ?? 두번째 ?? 세번째 ?? 네번째 ?? 'Anonymous');

// 두 연산자의 차이점
const 값 = 0;
let 결과: any = 값 ?? '정의되지 않은 변수';

결과 = 값 || 'falsy한 변수';

export default () => null;
