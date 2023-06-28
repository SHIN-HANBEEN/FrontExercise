// Q. 다음 코드를 실행했을때 예상결과를 작성하세요. 

function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}

let promise = job();

promise
.then(function() {
    console.log('Success 1');
})
.then(function() {
    console.log('Success 2');
})
.catch(function() {
    console.log('Error 1');
});

// 정답
