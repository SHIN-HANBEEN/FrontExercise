
const result = true;
const sec = 3;

setTimeout(function() { // callback 함수
    if(result) {
        console.log('성공');
    } else {
        console.error('실패');
    }
}, sec * 1000);

// setTimeout() 과 같은 비동기 함수의 결과를 콜백함수로 바로 처리하면,
// 콜백 함수의 내용이 길어질수록 가독성이 떨어지게 된다. 
// 무슨 말이냐면 setTimeout 함수와 call back 함수가 붙어서 작성되어야
// 하는데, 실제로 call back 함수가 실행되는 것은 시간이 흐름 뒤다.
// 따라서 실제 작동하는 시간대로 코드를 볼 수 없게 되어 가독성이 떨어진다는 
// 의미이다. 
