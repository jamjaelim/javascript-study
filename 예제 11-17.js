let person = {
    name : 'Sim'
}

let copy = person

console.log(copy === person)

copy.name = 'Choi'

person.address = 'German'

console.log(copy)
console.log(person)