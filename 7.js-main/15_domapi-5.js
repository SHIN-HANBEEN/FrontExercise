/* DOM API - 요소의 내용 확인, 수정하기 */

const boxEl = document.querySelector('.box'); //하나의 요소만 검색
console.log(boxEl.textContent); //요소의 내용 출력

boxEl.textContent = 'Hi~'; //요소의 내용 수정
console.log(boxEl.textContent); //다시 출력