// 生成一个Promise对象的数组
// const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
//
// })

const p1 = new Promise((resolve, reject) => {
    resolve('hello');
})
.then(result => result)
.catch(e => e);

const p2 = new Promise((resolve, reject) => {
    throw new Error('出错了11');
})
.then(result => result)
.catch(e => e);

Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(e => console.log(e))