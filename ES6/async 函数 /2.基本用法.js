// async function getStockPriceByName(name) {
//     const symbol = await getStockSymbol(name);
//     const stockPrice = await getStockPrice(symbol);
//     return stockPrice;
// }
// function getStockSymbol(v) {
//     console.log("getStockSymbol"+" "+v);
// }
// function getStockPrice(v) {
//     console.log("getStockPrice"+"  "+v);
// }
// getStockPriceByName('goog').then(function (result) {
//     console.log(result);
// });

function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}

asyncPrint('hello world', 500);
