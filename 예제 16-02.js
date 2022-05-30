const person = {
    name: 'Sim',
    address: 'Yong-in'
}

console.log(Object.getOwnPropertyDescriptor(person, 'name'))

console.log(Object.getOwnPropertyDescriptor(person, 'address'))

// ---Descriptor에 두 개 넣으면 (person, 'address', 'name') 맨 뒤에 것이 날라감. - 두 개 안됨 

console.log(Object.getOwnPropertyDescriptors(person))