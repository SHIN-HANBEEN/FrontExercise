
function person() {
    this.eyes = 2;
}
let kim1 = new person();
let park1 = new person();
console.log(kim1.eyes);
// js 에서 function 은 객체처럼 취급이 된다. 
// persno 이라는 funciton 이 eyes 라는 property 를 갖고 있는 형태가 된다.
// kim 과 park 이 각각 생성되면서 메모리 2개가 사용된다.

function person () {};
person.prototype.eyes = 2;
var kim2 = new person();
var park2 = new person();
console.log(kim2.eyes);
// person 의 프로토타입 객체는 한 번만 생성되므로 메모리에 1개만 사용된다
// 이게 무슨 말이냐면, person 이라는 function 개체의 prototype 은 1개가 
// 생성된다. 그리고 이 prototype 을 kim2와 park2 가 참조하는 것이다.
// 그리고 kim 과 park 이 eyes = 2 라는 값을 공유해서 사용한다. 
// 정확히 말하면 같은 메모리 주소를 참조하고 있다는 것을 의미한다. 
// 말이 어려운데, 정리하자면 kim2.eyes 라는 것을 출력하려고 하면 
// 출력이 되는 것을 알 수 있는데, 이것이 가능한 이유는 kim2 자체에는 
// eyes 라는 값이 없는데, prototype 에 들어 있는 것은 참조가 가능하기 때문이다
// 따라서 메모리 사용을 줄이는 효과를 가져올 수 있다는 것이다. 