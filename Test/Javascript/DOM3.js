
const boxEls = document.querySelectorAll('.box');
// document.querySelectorAll 이기 때문에 box 클래스를 가진
// 모든 html 요소가 반환된다. 
console.log(boxEls);
// 여러개가 반환 되어있는 것을 볼 수 있습니다. 

boxEls.forEach(function (boxEl, index) {
    console.log(boxEl, index);
})
// forEach 메소드를 사용하면 요소를 순회할 수 있다. 
// 인자로 함수를 사용합니다. 
// 위 코드를 보면 boxEls 의 요소들 중 첫 번째 요소를 boxEl 에 담고 
// 첫 번째 요소의 index 번호를 index 에 담습니다. 
// 그러면 함수 안에서 우리가 각 요소마다 해주고 싶은 것을 하게 됩니다. 
// console.log(boxEl, index) 의 결과가 콘솔창에 보이게 됩니다. 