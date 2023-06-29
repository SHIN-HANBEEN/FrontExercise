// 일반함수 안에서 this 는 이 일반함수를 호출하는 객체를 가리킨다. 
// 따라서 호출하는 위치에 따라서 this 는 달리진다. 

const people = {
    name: 'gildong',
    say: function() {
        console.log(this);
    }
}

people.say();
const sayPeople = people.say;
sayPeople();
// 따라서 위의 saypeople() 함수는 호출하는 객체 없이 실행되었기 때문에
// 전역에서 호출된 것으로 js 는 인식한다. 
// 이에 따라서 여기서 사용되는 this 는 전역 객체인 window 를 호출하게 된다.