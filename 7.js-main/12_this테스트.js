/* 함수와 this키워드 테스트  */

document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");

    btn1.onclick = function () {
        alert(this); //<button>
        this.textContent = '버튼이름변경';
    };
    btn2.onclick = () => {
        alert(this); //<window>
    };
});