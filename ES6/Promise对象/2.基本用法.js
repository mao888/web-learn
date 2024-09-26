// const promise = new Promise(function (resolve, reject) {
//
//     if (true) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// promise.then(value => {
//     console.log('成功');
// }, reason => {
//     console.log('失败');
// })

// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, 'done111');
//     })
// }
// timeout(100).then(value => {
//     console.log(value);
// })

// let promise2 = new Promise(function (resolve, reject) {
//     console.log('promise222');
//     resolve();
// });
// promise2.then(() => {
//     console.log('resolved');
// })
// console.log('script end');

// 异步加载图片的例子
// function loadImageAsync(url) {
//     return new Promise(function(resolve, reject) {
//         const image = new Image();
//
//         image.onload = function() {
//             resolve(image);
//         };
//
//         image.onerror = function() {
//             reject(new Error('Could not load image at ' + url));
//         };
//
//         image.src = url;
//     });
// }
// loadImageAsync('https://i.postimg.cc/d32Q7tTg/image.jpg')

// 下面是一个用Promise对象实现的 Ajax 操作的例子。
// const getJSON = function(url) {
//     const promise = new Promise(function(resolve, reject){
//         const handler = function() {
//             if (this.readyState !== 4) {
//                 return;
//             }
//             if (this.status === 200) {
//                 resolve(this.response);
//             } else {
//                 reject(new Error(this.statusText));
//             }
//         };
//         const client = new XMLHttpRequest();
//         client.open("GET", url);
//         client.onreadystatechange = handler;
//         client.responseType = "json";
//         client.setRequestHeader("Accept", "application/json");
//         client.send();
//
//     });
//
//     return promise;
// };
//
// getJSON("/posts.json").then(function(json) {
//     console.log('Contents: ' + json);
// }, function(error) {
//     console.error('出错了', error);
// });
const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('出错了')), 3000)
})
const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000)
})

p2
    .then(result => console.log(result))
    .catch(error => console.log(error))