
document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");

    btn1.onclick = function () {
        alert(this);
        this.textContent = '버튼이름변경';
    };
    btn2.onclick = () => {
        alert(this);
    };
});

const people = {
    name: 'gildong',
    age: 10,
    say: () => { // 화살표 함수 안에서는 this 가 존재하지 않는다. 
        console.log(this);
    }
}

people.say();
const sayPeople = people.say;
sayPeople();
// this 는 화살표 함수 안에 존재할 수 없기 때문에 존재할 수 있는 상위
// 스코프로 올라가게 되는데, 이번 경우에는 전역에서 this 가 사용되어 
// 출력되는 것을 볼 수 있다. 