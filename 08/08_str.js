//문자열 
let str ;

//문자열 길이
str = "Hello";
console.log(str.length); // 5

//문자열 변환
str = "aBc" ;
console.log(str.toLowerCase()) ; //abc
console.log(str.toUpperCase()) ; //ABC

str = "123";
console.log(parseInt(str));       // 123
console.log(isNaN(str));          // false

str = "Hello"

//인덱스를 활용한 문자열 추출
console.log(str[0]);              //H
console.log(str.charAt(0));       //H

//문자열 순회
for(let c of str) {               
  console.log(c);                 // H, e, l, l, o
}

//문자열 인덱스와 값 순회 
for(let [i,c] of str.split('').entries()) {               
  console.log(i, c);             // 0 H, 1 e, 2 l, 3 l, 4 o    
}

//문자열 검색
str = "Hello World";

console.log(str.indexOf("World")); // 6
console.log(str.indexOf("world")); // -1

console.log(str.includes("Hello")); // true
console.log(str.includes("hello")); // false

//문자열 추출
str = "Hello World";

console.log(str.slice(0, 5));       // Hello 
console.log(str.slice(5, 0));       //   
console.log(str.slice(-11, -6));    // Hello 

console.log(str.substring(0, 5));       // Hello 
console.log(str.substring(5, 0));       // Hello  
console.log(str.substring(-11, -6));    // 
 
