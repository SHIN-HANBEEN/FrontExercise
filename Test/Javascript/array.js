
const arr1 = ['Apple', 'Banana', 'Cherry'];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
arr1[0] = 'Orange';
console.log(arr1[0]);


const arr2 = ['a', 'b', 1, 2, true];
console.log(arr2);
arr2.push(3); // 배열의 push 메소드로 새로운 요소 추가
console.log(arr2);
// const 변수인데 왜 값을 변경할 수 있을까?
// const arr2 에는 주소 값이 저장되어 있다. 
// 실제로 값이 변경되는 그 안의 변경사항은 주소값의 변화를 가져오지 않기 
// 때문에 const arr2 변수에 대입된 배열의 값이 변경되도 오류가 발생하지 않는다.

const objArr = [];
objArr.push({ name: 'Americano' });
objArr.push({ name: "Latte" });
console.log(objArr);
console.log(objArr[0]);
console.log(objArr.length);
