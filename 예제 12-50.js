function repeat1(n) {
    for (i = 0; i < n; i++) console.log(i)
}

console.log(repeat1(6))


function repeat2(n) {
    for (j = 0; j < n; j++) {
        if (j % 2) console.log(j)
    }
}

console.log(repeat2(6))