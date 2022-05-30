const person = {
    firstName: 'Sanghyun',
    lastName: 'Park',

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ')
    }
}

// get은 매개변수 없음, set은 매개변수(name) 있음

console.log(person.firstName + ' ' + person.lastName)

person.fullName = 'Jaelim Sim'
console.log(person)

console.log(person.fullName)