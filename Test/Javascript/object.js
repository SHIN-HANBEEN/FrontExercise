let age = 'name';
const user = {
    name: '둘리',
    age: 10,
    get_name: function() {
        console.log(this.name);
    }
};

console.log(user[age]); // 대괄호 사용

