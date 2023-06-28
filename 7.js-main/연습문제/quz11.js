// Q. 다음 코드를 실행했을때 예상결과를 작성하세요. 

function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise
.then(function(msg) {
    console.log(msg);
})
.catch(function(error) {
    console.log(error);
});

// 정답
