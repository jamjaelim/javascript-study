let factorial = function foo (n) {
    if (n <= 1) return

    let res = n
    while (--n) res *= n
    return res
}

console.log(factorial(3))