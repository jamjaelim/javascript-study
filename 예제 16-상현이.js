const Jaelim = {
    name: 'Sim',
    getName() {
        return this.name
    },
    setName(name) {
        this.name = name
    }

}

console.log(Jaelim.name)


Jaelim.setName('Park')

console.log(Jaelim.getName())
console.log(Jaelim.name)


console.log(Jaelim.__proto__)