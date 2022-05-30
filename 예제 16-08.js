const person = {}

Object.defineProperty(person, 'firstName', {
    value: 'Ungmo',
    writable: true,
    enumerable: true,
    configurable: true
})

Object.defineProperty(person, 'lastName', {
    value: 'Lee'
})

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName')
console.log('firstName', descriptor)

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName')
console.log('lastName', descriptor)

console.log(Object.keys(person))
//객체 프로퍼티의 enumerable 값이 false인 경우 해당 프로퍼티는 for...in 문이나 Object.keys 등으로 열거할 수 없다.

person.lastName = 'Kim'
//객체 프로퍼티의 writable 값이 false인 경우 해당 프로퍼티의 value 값을 변경할 수 없다.

delete person.lastName
//객체 프로퍼티의 configurable 값이 false인 경우 해당 프로퍼티는 삭제할 수 없다. - 무시됨.
//                                             해당 프로퍼티는 재정의할 수 없다. - 재정의 시 Uncaught TypeError 발생

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName')
console.log('lastName', descriptor)


Object.defineProperty(person, 'fullName', {
    get() {
        return `${this.firstName} ${this.lastName}`
    },
    set(name) {
        [this.firstName, this.lastName] = name.split(' ')
    },
    enumerable: true,
    configurable: true
})

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName')
console.log('fullName', descriptor)

person.fullName = 'Heegun Park'
console.log(person)