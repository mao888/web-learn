var a = undefined;
// 或者
var a = null;

if (!undefined) {
    console.log('undefined is false');
}
// undefined is false

if (!null) {
    console.log('null is false');
}
// null is false

console.log(undefined == null);
// true

// 变量声明了，但没有赋值
var i;
console.log(i);
i // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
    return x;
}
console.log(f()); // undefined

// 对象没有赋值的属性
var  o = new Object();
console.log(o.p); // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
console.log(f()); // undefined


console.log("属性")
var obj = { p: 1 };
console.log(Object.keys(obj));// ["p"]

delete obj.p // true
console.log(obj.p); // undefined
console.log(Object.keys(obj)); // []

var person = { name: '老张' };

for (var key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key);
    }
}

console.log("函数=====")
var add = new Function(
    'a',
    'b',
    'return a + b'
);
console.log(add(1, 2));


function add(x, y) {
    return x + y;
}

// 将函数赋值给一个变量
var operator = add;

// 将函数作为参数和返回值
function a(op){
    return op;
}

// f.toString()
// function f() {
//  a();
//  b();
//  c();
// }

// 数组
var arr = [
    {a: 1},
    [1, 2, 3],
    function() {return true;}
];

console.log(arr[0]); // Object {a: 1}
console.log(arr[1]); // [1, 2, 3]
console.log(arr[2]); // function (){return true;}

var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr));
arr.pop();
console.log(arr.length);

var arr = [];
arr[10] = 'a';
console.log(arr.length);
console.log(Object.keys(arr));

var a = [1, , 1];
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}