let string = 'Hello World.'
let search = 'l'

const regexp = new RegExp (search, 'g')
console.log (string.match(regexp).length)