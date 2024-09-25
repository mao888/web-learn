function f1(resolve, reject) {
    // 异步代码...
    console.log(1);
}

var p1 = new Promise(f1);

p1.then(f2);

function f2(resolve, reject) {
    // 异步代码...
    console.log(2);
}