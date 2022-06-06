import React from "react";

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index
const fruits = ["사과", "바나나"];
console.log(fruits);
console.log(fruits.length); // 2
console.log(fruits[0]); // 사과, 배열의 첫번째 값을 구할 때
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // [총길이 -1] : 제일 마지막 값을 구할 때

console.clear();
// 3. Loop
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach (fruit, index, array)
fruits.forEach((fruit) => console.log(fruit));

// 4. add, delete, copy
// push
fruits.push("딸기", "복숭아");
console.log(fruits); // ['사과', '바나나', '딸기', '복숭아']

// pop
fruits.pop();
console.log(fruits); // ['사과', '바나나', '딸기']

// unshift
fruits.unshift("레몬");
console.log(fruits); // ['레몬', '사과', '바나나', '딸기']

// shift
fruits.shift();
console.log(fruits); // ['사과', '바나나', '딸기']

// splice : 지우고 원하는 배열 추가 가능
fruits.push("복숭아", "레몬");
console.log(fruits); // ['사과', '바나나', '딸기', '복숭아', '레몬']
fruits.splice(1, 1); // index, number
console.log(fruits); // ['사과', '딸기', '복숭아', '레몬']
fruits.splice(1, 1, "참외", "수박");
console.log(fruits); // ['사과', '참외', '수박', '복숭아', '레몬']

// concat
const fruits2 = ["배", "망고"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // ['사과', '참외', '수박', '복숭아', '레몬', '배', '망고']

console.clear();
// 5. Searching
// find the index
// indexOf
console.log(fruits); // ['사과', '참외', '수박', '복숭아', '레몬']
console.log(fruits.indexOf("사과")); // 0
console.log(fruits.indexOf("망고")); // -1

// includes
console.log(fruits.includes("수박")); // true
console.log(fruits.includes("망고")); // false

console.clear();
// lastIndexOf
fruits.push("사과");
console.log(fruits); // ['사과', '참외', '수박', '복숭아', '레몬', '사과']
console.log(fruits.indexOf("사과")); // 0 같은 사과가 있어도 첫번째로 해당하는
console.log(fruits.lastIndexOf("사과")); // 5 제일 마지막에 해당하는 index

function Array() {
  return <h1>Javascript Array!</h1>;
}

export default Array;
