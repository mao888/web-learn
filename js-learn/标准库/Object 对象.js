// Object对象本身的方法
// Object.print = function (o) {
//     console.log(o);
// }
// Object.print(111)


// Object的实例方法
Object.prototype.print = function () {
    console.log(this);
}
var obj = new Object();
obj.print()

var obj = Object(1);
console.log(obj instanceof Object); // true
console.log(obj instanceof Number); // true

var arr = [];
var obj = Object(arr); // 返回原数组
console.log(obj === arr); // true
console.log(obj instanceof Array); // true

var value = {};
var obj = Object(value) // 返回原对象
obj === value // true

var fn = function () {};
var obj = Object(fn); // 返回原函数
obj === fn // true


var o1 = {a: 1};
var o2 = new Object(o1);
o1 === o2 // true

var obj = new Object.prototype(123);
obj instanceof Number // true