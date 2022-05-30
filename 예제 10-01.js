let person = {
    name: 'Park',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

console.log(typeof person)
console.log(person)
console.log(person.sayHello())