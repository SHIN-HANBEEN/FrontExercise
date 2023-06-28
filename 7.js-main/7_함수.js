/* 함수 */

//함수 선언
function helloFunc() { //외부에서 들어오는 값을 매개변수로 선언, 리턴타입은 없음
    console.log(1234); //중괄호 안에 실행한 코드 작성
}

//함수 호출
helloFunc(); //함수이름 작성 후 소괄호 추가

//함수의 데이터 반환
function returnFunc() { 
    return 123; //데이터가 반환되며 함수가 종료됨
}

const a = returnFunc(); //반환 받은 값을 변수에 저장
console.log(a);