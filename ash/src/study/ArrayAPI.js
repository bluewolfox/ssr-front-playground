import React from "react";

// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join("|"); // 원하는 구분자 추가
  console.log(result); // apple|banana|orange
  /*
  const result = fruits.join(", and");
  console.log(result);  // apple, and banan, and orange
  */
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  //const result = fruits.split(","); // 구분자, limit
  //console.log(result);  // ['🍎', ' 🥝', ' 🍌', ' 🍒']
  const result = fruits.split(",", 2);
  console.log(result); // ['🍎', ' 🥝']
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result); // [5, 4, 3, 2, 1]
  console.log(array); // [5, 4, 3, 2, 1] 배열 자체를 변화시킴
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];

  // const result = array.splice(0, 2);  // array 자체를 변경
  // console.log(result);  // [1, 2]
  // console.log(array); // [3, 4, 5]

  const result = array.slice(2, 5); // (start, 배제되는)
  console.log(result); // [3, 4, 5]
  console.log(array); // [1, 2, 3, 4, 5]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log(result); // Student {name: 'C', age: 30, enrolled: true, score: 90}
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result); // [Student, Student, Student]
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result); // [45, 80, 90, 66, 88]
}
console.clear();
// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  console.log(result); // true

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2); // true
}

console.clear();
// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join();
  console.log(result);
}

function ArrayAPI() {
  return <h1>ArrayAPI!</h1>;
}
export default ArrayAPI;
