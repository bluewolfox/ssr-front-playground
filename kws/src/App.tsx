import React from 'react';

// 1. 객체의 불변성
// 깊은복사(Deep Copy)와 얕은복사(Shallow Copy)
const obj1 = {
  a: 1,
  b: 'string',
  c: {
    name: 'Leon',
    age: '29',
  },
};
// eslint-disable-next-line
const obj2 = Object.assign({}, obj1); // 얕은 복사
const obj3 = Object.assign(obj2, obj1); // 깊은 복사
const obj4 = { ...obj3 }; // 얕은 복사
const obj5 = JSON.parse(JSON.stringify(obj4)); // 깊은 복사
console.log(`obj1과 obj2는 같을까? === ${obj1 === obj2}`);
console.log(`obj2과 obj3는 같을까? === ${obj2 === obj3}`);
console.log(`obj3과 obj4는 같을까? === ${obj3 === obj4}`);
console.log(`obj4과 obj5는 같을까? === ${obj4 === obj5}`);

// 왜 우리가 를 알아야할까.

const someThing작업 = (params: { [key: string]: any }) => {
  params.a = 12;
};

async function onGetParams(params: { [key: string]: any }) {
  someThing작업(params);

  console.log(params);

  // const response = await api.request('post','/api/v1/somethingPost',params)
}
onGetParams({ ...obj1 });
onGetParams({ ...obj2 });

console.log({ obj1, obj2, obj3, obj4 });

export default () => <div>App</div>;
