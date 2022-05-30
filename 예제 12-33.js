function changeVal(primitive, obj) {
    primitive += 100
    obj.name = 'Sim'
}

var num = 200
var person = {name: 'Park'}

changeVal(num, person)

console.log(num)

console.log(person)