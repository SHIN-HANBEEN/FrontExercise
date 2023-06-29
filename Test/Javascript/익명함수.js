
function hello() {
    console.log('Hello');
}
hello();

// 이름이 없는 함수이다. 
const world = function () {
    console.log('World');
}
world();

// HTML 문서 클릭시 handler 이벤트가 호출되는 코드이다. 
function handler(){
    console.log('Clicked');
}
document.body.addEventListener('click', handler);

// 함수를 재사용할 필요가 없다면 익명함수를 사용하는 것이 편리하다.
document.body.addEventListener('click', function () {
    console.log('Clicked!');
})