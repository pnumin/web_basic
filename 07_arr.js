//배열 생성
let arr = [1, 2, 3, 4, 5];
console.log(arr)                      // [1, 2, 3, 4, 5]

//Array 생성자 사용
let arr1 = new Array(5); 			        // 길이가 5인 빈 배열 생성
let arr2 = new Array(1, 2, 3, 4, 5); 	// 요소가 있는 배열 생성
console.log(arr1)                     // [empty × 5]
console.log(arr2)                     // [1, 2, 3, 4, 5]

//배열 크기
console.log(arr.length)               // 5
arr.length = 0 ;
console.log(arr)                      // []

arr = [1, 2, 3, 4, 5];

//배열 요소 추가
arr.push(6);
console.log(arr)                      // [1, 2, 3, 4, 5, 6]

//배열 요소 삭제
arr.pop();
console.log(arr)                      // [1, 2, 3, 4, 5]

//배열 처음 요소 추가
arr.unshift(6);
console.log(arr)                      // [6, 1, 2, 3, 4, 5]

//배열 요소 삭제
arr.shift();
console.log(arr);                     // [1, 2, 3, 4, 5]

//배열 요소 접근
console.log(arr[1]) ;                 // 2

//배열 순회1
for(let i=0 ; i < arr.length ; i++) {
  console.log(arr[i]);
}

//배열 순회2
for(let i in arr) {
  console.log(arr[i]);
}

//배열 순회3
for(let item of arr) {
  console.log(item);
}

for(let [i,item] of arr.entries()) {
  console.log(i, item);
}

//배열 순회3
arr.forEach((item, i) => {
  console.log(i, item);
})


arr = [1,4,2,3,5]

//배열 변경
arr2 = arr.map(i => i *2 ) ;
console.log(arr2);                  // [2, 8, 4, 6, 10]

arr2 = arr.filter(i => i %2 == 0 ) ;
console.log(arr2);                  // [4, 2]

//숫자 정렬
arr.sort((a, b) => a - b);          
console.log(arr);                   // [1, 2, 3, 4, 5]


//배열 결합
arr1 = [1,3,5]
arr2 = [2,4]

arr = arr1.concat(arr2);             
console.log(arr);                   // [1, 3, 5, 2, 4]

arr = arr1.join();
console.log(arr);                   // 1,3,5
arr = arr1.join('');
console.log(arr);                   // 135

//배열 분해
arr = [1,2,3,4,5];

arr1 = arr.slice(2, 5);
console.log(arr1);                  // [3, 4, 5]

arr.splice(2,2,'a','b');
console.log(arr);                   // [1, 2, 'a', 'b', 5]

//배열 요소 찾기
arr =  [1, 2, 'a', 'b', 5]

console.log(arr.includes('1'));     // false
console.log(arr.includes(1));       // true

console.log(arr.indexOf('1'));      // -1
console.log(arr.indexOf(1));        // 0

//배열에 trailing 쉼표
arr1 = [1, 2, 3,];                 
arr2 = [4, 5] ;

//전개 연산자 (Spread Operator ...)
arr = [...arr1];
console.log(arr);                   // [1, 2, 3] 

arr = [...arr1, ...arr2];
console.log(arr);                   // [1, 2, 3, 4, 5] 

[x, y] = arr2 ;
console.log(x, y);                  // 4 5 

