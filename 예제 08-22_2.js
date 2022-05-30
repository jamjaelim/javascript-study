let string = 'Hello World.'
let search = 'd'
let index

for (let i = 0 ; i < string.length ; i++) {
    if (string[i] === search) {
        index = i
        break
    }
}

console.log(index)

console.log(string.indexOf(search))