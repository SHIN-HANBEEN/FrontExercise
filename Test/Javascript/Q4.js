const arr = [1, 'aa', true, 5, 10];
let result = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
        result = result + arr[i];
    }
}

console.log(result);