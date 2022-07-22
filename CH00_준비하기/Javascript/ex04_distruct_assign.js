/**
 *  구조 분해 할당(Destructing assign)
 *  배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있음
 */

const arr1 = [1, 2, 3, 4, 5];
let a, b, rest;
[a, b] = [1, 2];
[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(rest);
console.log(a);
console.log(b);

//  객체 구조 분해
const student = {
  name: `이창주`,
  age: `30`,
  gender: `male`
}

let { name, gender, age } = student;
name = `권혁하`;
console.log(student)


