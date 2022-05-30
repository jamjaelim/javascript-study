outer : for (let i = 0 ; i < 4 ; i++) {
    for (let j = 0 ; j < 3 ; j++) {
        if (i + j === 5) break outer
        console.log(`inner [${i}, ${j}]`)
    }
}

console.log('Done!')