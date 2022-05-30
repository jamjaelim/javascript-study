function People(name, address){
    this.name = name,
    this.address = address
}

const jaelim = new People('Jaelim', 'Dongbaek')

const sanghyun = new People('Sanghyun', 'Dongbaek', 'Male') 

const o = {
    name: 'o',
    address: 'hi'
}

console.log(jaelim)

console.log(sanghyun)

console.log(jaelim.__proto__.__proto__)

console.log(People.__proto__.__proto__)