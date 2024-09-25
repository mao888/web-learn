console.log(String({a: 1})); // "[object Object]"
console.log(String([1, 2, 3])); // "1,2,3"
var a = {a: 1};
console.log(a.toString()); // "[object Object]"
console.log(typeof a); // "object"
console.log(a.valueOf()); // {a: 1}

