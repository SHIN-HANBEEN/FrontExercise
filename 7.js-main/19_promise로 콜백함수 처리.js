/* */

const result = false; // 예상결과
const sec = 3;
const promise = new Promise((resolve, reject) => { 
    // Promise 생성시 넘기는 callback = resolve, reject  
    // resolve 동작 완료시 호출, 에러 났을 경우 reject  
    setTimeout(() => {
        if(result){
            resolve('성공');
        } else {
            reject('실패');
        }
    }, sec * 1000);
});

promise
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.error(error);
});
