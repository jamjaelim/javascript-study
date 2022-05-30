const person = { name: 'Lee' }

console.log(Object.isFrozen(person))

Object.freeze(person)

console.log(Object.isFrozen(person))

console.log(Object.getOwnPropertyDescriptors(person))

person.age = 20
console.log(person)

person.name = 'Kim'
console.log(person)

Object.defineProperty(person, 'name', {configurable: true})
//재정의 금지 -> TypeError