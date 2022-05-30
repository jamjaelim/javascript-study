let prefix = 'prop'
let i = 0

let obj = {}

obj[prefix + '-' + ++i] = i
obj[prefix + '-' + ++i] = i
obj[prefix + '-' + ++i] = i


console.log(obj)