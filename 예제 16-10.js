const person = { 
    name: 'Lee',
age:19}

console.log(Object.isExtensible(person))

Object.preventExtensions(person)

console.log(Object.isExtensible(person))


person.age = 20
console.log(person)

delete person.name
console.log(person)

Object.defineProperty(person, 'heigh', {value: 180})
// 추가 불가능 -> TypeError 발생
console.log(person)