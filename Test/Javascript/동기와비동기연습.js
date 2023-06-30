
let promise = new Promise(function(resolve, reject) {
    resolve();
});

promise
.then(function() {
    console.log('Success 1');
})
.then(function() {
    console.log('Success 2');
})
.catch(function() {
    console.log('Error 1');
})

promise
.then(function() {
    console.log('Success 3');
})
.then(function() {
    console.log('Success 4');
})