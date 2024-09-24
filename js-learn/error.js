// try {
//     throw new Error('出错了!');
// } catch (e) {
//     console.log(e.name + ": " + e.message);
//     console.log(e.stack);
// }

// try {
//     throw "出错了";
// } catch (e) {
//     console.log(111);
// }
// console.log(222);
// 111
// 222

// var n = 10;
//
// try {
//     throw n;
// } catch (e) {
//     if (e <= 50) {
//         // ...
//         console.log(e);
//     } else {
//         throw e;
//     }
// }
// Uncaught 100

// function idle(x) {
//     try {
//         console.log(x);
//         return 'result';
//     } finally {
//         console.log('FINALLY');
//     }
// }
//
// idle('hello')
// hello
// FINALLY


// var count = 10;
// function countUp() {
//     try {
//         return count;
//     } finally {
//         count++;
//     }
// }
//
// console.log(countUp());     // 10
// console.log(count);         // 11

// function f() {
//     try {
//         console.log(0);
//         throw 'bug';
//     } catch(e) {
//         console.log(1);
//         return true; // 这句原本会延迟到 finally 代码块结束再执行
//         console.log(2); // 不会运行
//     } finally {
//         console.log(3);
//         return false; // 这句会覆盖掉前面那句 return
//         console.log(4); // 不会运行
//     }
//
//     console.log(5); // 不会运行
// }
//
// var result = f();
// 0
// 1
// 3

// console.log(result);
// false

// function f() {
//     try {
//         throw '出错了！';
//     } catch(e) {
//         console.log('捕捉到内部错误');
//         throw e; // 这句原本会等到finally结束再执行
//     } finally {
//         return false; // 直接返回
//     }
// }
//
// try {
//     f();
// } catch(e) {
//     // 此处不会执行
//     console.log('caught outer "bogus"');
// }

//  捕捉到内部错误


try {
    try {
        consle.log('Hello world!'); // 报错
    }
    finally {
        console.log('Finally');
    }
    console.log('Will I run?');
} catch(error) {
    console.error(error.message);
}
// Finally
// consle is not defined
