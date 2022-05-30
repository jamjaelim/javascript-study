let string = 'Hello World'
let search = 'l'
let count = 0

for (let i = 0 ; i < string.length ; i++){
    if (string[i] !== search) continue;
    count++
}
console.log(count)