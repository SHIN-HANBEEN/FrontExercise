
function printStar (n, m) {
    for (let i = 0; i < m; i++) {
        let result = "";
        for (let j = 0; j < n; j++) {
            result = result + "*"
        }
        console.log(result);
    }
}

console.log(printStar(6,2));