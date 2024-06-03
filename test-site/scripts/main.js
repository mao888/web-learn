// let myHeading = document.querySelector("h1")
// myHeading.textContent = "Hello world!";

// let mapss = document.querySelectorAll("p")
// mapss.forEach(function (map) {
//     map.textContent = "Hello world!";
// })

let myVariable;
myVariable = "李雷";

let myVariable2 = "李雷";
console.log(myVariable)

myVariable2 = '韩梅梅';
console.log(myVariable2)

let myVariable3 = 3;
console.log(myVariable3===4)    // false

let iceCream = "chocolate";
if (iceCream === "chocolate") {
    console.log("我最喜欢巧克力冰淇淋了。");
} else {
    console.log("但是巧克力才是我的最爱呀……");
}

console.log(5 == '5'); // true，因为字符串 '5' 被转换为数字 5
console.log(null == undefined); // true，因为它们在比较时被视为相等
console.log(true == 1); // true，因为布尔值 true 被转换为数字 1
console.log(false == 0); // true，因为布尔值 false 被转换为数字 0

console.log(5 === '5'); // false，因为它们类型不同：一个是数字，一个是字符串
console.log(null === undefined); // false，因为它们类型不同
console.log(true === 1); // false，因为它们类型不同：一个是布尔值，一个是数字
console.log(false === 0); // false，因为它们类型不同
console.log(5 === 5); // true，因为它们类型相同，值也相同

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

console.log(multiply("4", "7"));
console.log(multiply(20, 20));
console.log(multiply(0.5, 3));

document.querySelector("h1").addEventListener("click", ()=>{
    alert("别戳我，我怕疼。");
})

let myImage = document.querySelector("img");

myImage.onclick = ()=>{
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox.png") {
        mySrc = "images/google.png";
        myImage.setAttribute("src", mySrc);
    } else {
        mySrc = "images/firefox.png"
        myImage.setAttribute("src", mySrc);
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla 酷毙了," + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName()
} else {
    let storeName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了," + storeName;
}

myButton.onclick = ()=>{
    setUserName();
}