/* 조건문 */

const isShow = true; //참을 의미하는 값
const checked = false; //거짓을 의미하는 값

if (isShow) {
    console.log('Show!'); //조건식을 맞족하고 출력됨
}

if (checked) {
    console.log('Checked!');
}

if(isShow){
    console.log('Show!'); //조건을 만족한다면 첫번째 블록을 수행
} else {
    console.log('Hide?'); //조건을 만족하지 않는다면 두번째 블록을 수행
}