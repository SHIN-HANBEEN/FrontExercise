/* DOM API - JS로 css속성 제어하기 */

const boxEl = document.querySelector('.box');
console.log(boxEl);

boxEl.addEventListener('click', function(){
    console.log('Click!!');
    boxEl.classList.add('active'); //class속성에 box와 함께 active값이 추가됨

    let hasActive = boxEl.classList.contains('active'); //요소에 해당 class 속성값이 있는지 확인
    console.log(hasActive);

    boxEl.classList.remove('active'); //class 속성값 삭제
    hasActive = boxEl.classList.contains('active'); //다시 확인
    console.log(hasActive);
});
