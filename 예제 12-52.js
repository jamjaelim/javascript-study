function repeat(n, f) {
    for (let i = 0; i < n; i++) {
        f(i)
    }
}

repeat(5, function(i) {
    if (i % 2) console.log(i)
})