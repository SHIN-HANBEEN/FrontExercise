
const result = false;
const sec = 3;

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
       if(result) {
            resolve('성공');
       }  else {
            reject('실패');
       }
    }, sec * 1000);
})
// Promise 객체를 만들었는데, resolve 와 reject 인자는 
// Promise 객체를 만들 때 자동 생성되어 자연스럽게 사용할 수 있는
// 인자들이다. 
// 요청에 대해 성공했다면 resolve를 호출하면 되고 
// 실패했다면 reject를 호출하면 promise 객체를 만드는 부분은
// 끝났다. 후처리는 이후에 작성해줄 수 있게 된다. 


// 요청에 성공하면 then 메시지 전달 후 남은 작업 실행
// 요청에 실패하면 catch 메시지 전달 후 남은 작업 실행

promise
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});
// 후처리 작성을 위해서는 then 과 catch 를 사용한다. 
// 여기서 message 와 error 는 resolve 와 reject 에 인자로 넣어준 
// 문자가 출력된다. 
// 실제로 웹 서버를 사용할 때는 웹 서버가 돌려준 메시지가 출력된다. 
// 후처리 함수에서 then 은 then 에 해당하는 promise 객체를 실행이 끝난 뒤
// 반환하고 이것을 catch 가 받아서 실행하게 된다. 
// 이것을 chaining 기술이라고 한다. 이 기술은 Java 에서도 사용된다.