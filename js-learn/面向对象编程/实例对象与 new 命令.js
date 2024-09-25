var Vehicle = function (){
    this.price = 1000;
};
var car = Vehicle();
console.log(car);   // undefined
console.log(price); // 1000

var car = new Vehicle();
console.log(car.price); // 1000

function Fubar(foo, bar) {
    if (!(this instanceof Fubar)) {
        return new Fubar(foo, bar);
    }

    this._foo = foo;
    this._bar = bar;
}
console.log(Fubar(1, 2)._foo);
console.log(new Fubar(1, 2)._foo);

var Vehicle = function () {
    this.price = 1000;
    return 1000;
};

console.log((new Vehicle()));   // Vehicle { price: 1000 } new命令就会忽略这个return语句，返回“构造”后的this对象
console.log((new Vehicle()) === 1000); // false

var Vehicle = function (){
    this.price = 1000;
    return { price: 2000 };
};
console.log((new Vehicle()).price); // 2000
console.log(new Vehicle().price===2000); // true

var person1 = {
    name: '张三',
    age: 18,
    greeting: function () {
        console.log('Hello I am ' + this.name);
    }
}

var person2 = new Object(person1);
console.log(person2.name);  // 张三
person2.greeting()  // Hello I am 张三

var person3 = Object.create(person1);
console.log(person3.name);  // 张三
person3.greeting()  // Hello I am 张三
