/* */

const result = true; // 예상결과 -> true/false
const sec = 3;

setTimeout(function(){ //callback 함수
    if(result){
        console.log('성공');
    } else {
        console.error('실패');
    }
}, sec * 1000);