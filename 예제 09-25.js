function getStringLength(str) {
    str = str || ''
    return str.length
}

console.log(getStringLength())
console.log(getStringLength('hi'))
console.log(getStringLength(''))


function getStringLength2(str = '') {
    return str.length
}

console.log(getStringLength2())
console.log(getStringLength('hi'))