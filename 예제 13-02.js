var a1 = 1

if (true) {
    var a2 = 2
    if(true) {
        var a3 = 3
    }
}

function foo() {
    let a4 = 4
    function bar() {
        let a5 = 5
    }
}

console.log(a1)
console.log(a2)
console.log(a3)
//console.log(a4)
//console.log(a5)