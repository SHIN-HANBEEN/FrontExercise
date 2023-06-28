// Q6. 4번문제를 함수를 사용하여 호출하는 형태로 바꾸세요

// 정답
function func(arr){
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result =  result + arr[i];
    }
    console.log(result);
}

const arr = [1,2,3,4];
func(arr);
