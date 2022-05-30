const person = {}

Object.defineProperties(person, {
    firstName: {
        value: 'Ungmo',
        writable: true,
        enumerable: true,
        configurable:true
    },
    lastName: {
        value: 'Lee',
        writable: true,
        enumerable: true,
        configurable: true
    },
    fullName: {
        get() {
            return `${this.firstName} ${this.lastName}`
        },
        set(name) {
            [this.firstName, this.lastName] = name.split(' ')
        },
        enumerable: true,
        configurable: true
    }
})

console.log(person)

person.fullName = 'Sanghyun Park'
console.log(person)