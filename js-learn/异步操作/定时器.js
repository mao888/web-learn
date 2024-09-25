function f() {
    console.log(2);
}

console.log(setTimeout(f, 1000));
console.log(setTimeout(f, 1000));
console.log(setTimeout(f, 1000));

// var id1 = setTimeout(f, 1000);
// clearTimeout(id1)