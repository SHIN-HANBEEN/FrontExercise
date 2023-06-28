/* 프로토타입과 상속 - prototype 키워드 */

function func() { };
console.log(func.prototype); // prototype는 함수의 부모객체를 가리킨다

func.prototype.name = '둘리'; //부모객체에 name프로퍼티를 추가한다
console.log(func.prototype); // func { name: '둘리' }
