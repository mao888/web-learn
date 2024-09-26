// var f = v => v;

// 等同于
var f = function (v) {
    return v;
};
console.log(f(1));

let fn = () => void doesNotReturn();
// 等同于
// let fn = function () {
//     return void doesNotReturn();
// }
function doesNotReturn() {
    console.log('doesNotReturn');
}
fn();

const numbers = (...nums) => nums;
// 等同于
// const numbers = function (...nums) {
//     return nums;
// }
console.log(numbers(1, 2, 3, 4, 5));

const headAndTail = (head, ...tail) => [head, tail];
// 等同于
// const headAndTail = function (head, ...tail) {
//     return [head, tail];
// }
console.log(headAndTail(1, 2, 3, 4, 5));

// 报错
// let getTempItem = id => { id: id, name: "Temp" };

// 不报错
let getTempItem = id => ({ id: id, name: "Temp" });

console.log(getTempItem(1));