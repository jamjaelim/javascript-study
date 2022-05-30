let obj = {
    name : 'Sim',
    sayHi : function () {
        console.log('Hi!' + this.name)
    }
}

obj.sayHi()

console.log(obj.sayHi())

// console.log() 안해도 값이 출력됨,
// obj.sayHi() 안쓰면  출력 안됨
// console.log(obj.sayHi()) 라고 쓰면 Hi! Sim 이랑 undefined가 출력됨.