let res = (function (){
    let a = 3
    let b = 5
    return a * b
}())

console.log(res)


res = (function (a, b){
    return a * b
}(4, 5))

console.log(res)