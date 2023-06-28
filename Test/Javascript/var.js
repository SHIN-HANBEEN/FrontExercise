// 변수 var 를 사용하지 않는 이유

// console.log(puppy);
let puppy = "cute";
{
    let puppy = "so cute";
}
console.log(puppy);

// console.log(cat); 
var cat = "cute";
{
    var cat = "so cute";
}
console.log(cat);