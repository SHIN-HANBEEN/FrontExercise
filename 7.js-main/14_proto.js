/* 프로토타입과 상속 - __proto__ 키워드 */

const animal = {
    leg: 4,
    tail: 1,
    say() {
        console.log('I have 4 legs 1 tail');
    }
}

const dog = {
    sound: 'wang'
}

dog.__proto__ = animal; //__proto__를 사용하여 상속받기

console.log(dog.leg); // 부모에게 물려받은 프로퍼티
console.log(dog.tail); // 부모에게 물려받은 프로퍼티
dog.say(); // 부모에게 물려받은 메소드
console.log(dog.sound);