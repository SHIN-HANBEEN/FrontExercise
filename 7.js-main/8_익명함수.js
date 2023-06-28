/* 익명함수 */

// 이름이 있는 함수
function hello(){
    console.log('Hello~');
}
hello();

// 이름이 없는 함수
const world = function() { //함수를 선언할 때 이름이 없음. 하지만 함수를 변수에 대입했기 때문에, 변수의 이름 = 함수의 이름이 됨
    console.log('World~');
}
world();

//문서를 클릭하면 handler 이벤트가 호출되는 코드 작성하기
function handler(){
    console.log('Clicked!');
}
document.body.addEventListener('click', handler); //함수를 두번째 인자로 사용함

// 만약 함수를 재사용할 필요가 없다면, 익명함수를 사용
document.body.addEventListener('click', function (){
    console.log('Clicked!');
});