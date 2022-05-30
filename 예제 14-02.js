var x = 'global'

function foo(){
    x = 1
    console.log(x)
    var x = 'local'
    console.log(x)
}

foo()

console.log(x)