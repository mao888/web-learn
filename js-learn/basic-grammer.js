var a = 1 + 2;
console.log(a);

var x = 1;
var x;
console.log(x);


var b;
console.log(b);
b = 1;

{
    var c = 1;
    console.log(c);
}
console.log(c);

console.log("switch======")
switch (1 + 3) {
    case 2 + 2:
        f();
        break;
    default:
        neverHappens();
}
function f() {
    console.log("f");
}

function neverHappens() {
    console.log("neverHappens");
}

var x = 1;

switch (x) {
    case true:
        console.log('x 发生类型转换');
        break;
    default:
        console.log('x 没有发生类型转换');
}
// x 没有发生类型转换


// while (true) {
//     console.log('Hello, world');
// }


console.log("标签（label）======")
top:
    for (var i = 0; i < 3; i++){
        for (var j = 0; j < 3; j++){
            if (i === 1 && j === 1) break top;
            console.log('i=' + i + ', j=' + j);
        }
    }
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0

foo: {
    console.log(1);
    break foo;
    console.log('本行不会输出');
}
console.log(2);
// 1
// 2


top:
    for (var i = 0; i < 3; i++){
        for (var j = 0; j < 3; j++){
            if (i === 1 && j === 1) continue top;
            console.log('i=' + i + ', j=' + j);
        }
    }
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
// i=2, j=0
// i=2, j=1
// i=2, j=2