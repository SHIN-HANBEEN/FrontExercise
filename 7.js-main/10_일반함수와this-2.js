/* 일반함수와 this 키워드 */

const people = {
    name: 'gildong',
    say: function () {
        console.log(this);
    }
}

people.say(); //호출한쪽: people

const sayPeople = people.say.bind(people); //this를 강제로 지정한다
sayPeople();