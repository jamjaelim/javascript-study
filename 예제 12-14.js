let add1 = (function () {
    let a = 10
    return function (x, y) {
        return x + y + a
    }
}())

console.log(add1(1, 2))

let add2 = (function () {
    let b = 10
    return new Function('x', 'y', 'return x + y + b')
}())

console.log(add2(2, 5))