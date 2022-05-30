let prefix = 'prop'
let i = 0

let obj = {
    [`${prefix}-${++i}`] : i,
    [`${prefix}-${++i}`] : i,
    [`${prefix}-${++i}`] : i
}

console.log(obj)