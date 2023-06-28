/* 데이터 종류 - 2 */

//Object (객체데이터)
const user = {
    name: '둘리',
    age: 10,
    get_name: function () { //함수
        console.log(this.name);
    }
};
console.log(user.name); //객체에 포함된 데이터를 꺼낼 때는 도트연산자 사용
console.log(user.age);
user.get_name();

//Array (배열)
const arr1 = ['Apple', 'Banana', 'Cherry'];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);

const arr2 = ['a','b',1,2,true]; //값의 자료형이 달라도 함께 저장할수 있다
console.log(arr2); // [ 'a', 'b', 1, 2, true ]

//객체 배열
const objArr = []; //변수 선언하고 빈배열로 초기화
objArr.push({ name: 'Americano' }); // const인데 값을 변경하는게 가능하네?
objArr.push({ name: "Latte" }); //객체를 추가
console.log(objArr); //배열 출력
console.log(objArr[0]); //첫번째 객체 출력
console.log(objArr.length); // 2