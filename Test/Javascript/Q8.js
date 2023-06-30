
const child = {
    age: 10
}

const parent = {
    firstName: '이',
    country: '한국'
}

child.__proto__ = parent;

child.__proto__.firstName = '김';
child.__proto__.country = '미국';
child.age = 20;

console.log(child.age);
console.log(child.firstName);
console.log(child.country);
