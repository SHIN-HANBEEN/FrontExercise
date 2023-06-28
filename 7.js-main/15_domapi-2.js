/* DOM API - JS로 요소를 클릭했을 때 특정 코드 동작 시키기 */

const boxEl = document.querySelector('.box');
console.log(boxEl);

//addEventListener 메소드는 해당요소에서 이벤트가 발생하는지 대기하다가, 
//실제 이벤트가 발생하면 연결된 함수를 실행함
boxEl.addEventListener('click', function(){ //첫번째 인자: 이벤트이름, 두번째인자: 연결된함수
    console.log('Click!!');
});
