// function async(arg, callback) {
//     console.log('参数为 ' + arg +' , 1秒后返回结果');
//     setTimeout(function () {
//         callback(arg * 2);
//         }, 1000);
// }
// async(1, function (result) {
//     console.log('结果为 ' + result);
// });
// 参数为 1 , 1秒后返回结果
// 结果为 2

// function f(result) {
//     console.log('结果为: ', result);
// }
// async(1, f);
// 参数为 1 , 1秒后返回结果
// 结果为 2



// function final(value) {
//     console.log('完成: ', value);
// }
// async(1, function (value) {
//     async(2, function (value) {
//         async(3, function (value) {
//             async(4, function (value) {
//                 async(5, function (value) {
//                     async(6, final);
//                 });
//             });
//         });
//     });
// });
// 参数为 1 , 1秒后返回结果
// 参数为 2 , 1秒后返回结果
// 参数为 3 , 1秒后返回结果
// 参数为 4 , 1秒后返回结果
// 参数为 5 , 1秒后返回结果
// 参数为 6 , 1秒后返回结果
// 完成:  12

var items = [ 1, 2, 3, 4, 5, 6 ];
var results = [];

function async(arg, callback) {
    console.log('参数为 ' + arg +' , 1秒后返回结果');
    setTimeout(function () { callback(arg * 2); }, 1000);
}

function final(value) {
    console.log('完成: ', value);
}

// 串行执行
// function series(item) {
//     if(item) {
//         async( item, function(result) {
//             results.push(result);
//             return series(items.shift());
//         });
//     } else {
//         return final(results[results.length - 1]);
//     }
// }
//
// series(items.shift());

// 并行执行
// items.forEach(function (item) {
//     async(item, function (result) {
//         results.push(result);
//         if(results.length === items.length) {
//             final(results[results.length - 1]);
//         }
//     })
// })

var running = 0;
var limit = 2;
// 并行与串行的结合
function launcher() {
    while (running < limit && items.length > 0) {
        var item = items.shift();
        async(item, function (result) {
            results.push(result);
            running--;
            if (items.length > 0) {
                launcher();
            } else if (running === 0) {
                final(results);
            }
        });
        running++;
    }
}
launcher();