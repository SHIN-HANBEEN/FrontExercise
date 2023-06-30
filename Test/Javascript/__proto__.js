
const animal = {
    leg: 4,
    tail: 1
}

const dog = {
    sound: 'wang'
}

dog.__proto__ = animal; // __proto__ 를 사용하여 animal 을 부모로 지정

console.log(dog.leg);
console.log(dog.tail);
console.log(dog.sound);