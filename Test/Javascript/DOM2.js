
const boxE1 = document.querySelector('.box');
// css 선택자로 요소 선택하였다. 
console.log(boxE1);  
// null 이 출력되는데, html 요소가 존재하는데도 찾지 못하는 것을 볼 수 있음.
// html 문서에 script 태그에 defer 속성을 추가해야 한다. 
// script 태그를 body 보다 앞에 작성하면 웹 브라우저가 html body 를 읽기도
// 전에 script 가 실행되므로 이런 오류가 발생했던 것이다. 
// 따라서 body 뒤에 script 태그를 작성하거나 defer 속성을 추가해야 한다.

boxE1.addEventListener('click', function() {
    boxE1.classList.toggle('active');
    // class 속성에 active 값이 없으면 추가, 있으면 삭제하는 코드다. 

    let hasActive = boxE1.classList.contains('active');
    console.log(hasActive);
    // 요소에 active 속성이 있는지 확인하는 코드이다. 
})

