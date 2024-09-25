// var n = 999;
//
// function f1() {
//     console.log(n);
// }
// f1() // 999


// function f1() {
//     var n1 = 999;
// }

// console.log(n1)
// Uncaught ReferenceError: n is not defined(}


// function f1() {
//     var n = 99;
//     function f2() {
//         console.log(n);
//     }
//
//     return f2;
// }
//
// var result = f1();
// result(); // 999

function createIncrementor(start) {
    return function () {
        return start++;
    };
}

var inc = createIncrementor(5);

console.log(inc());
console.log(inc());
console.log(inc());

