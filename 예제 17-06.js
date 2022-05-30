function Circle(radius) {
    this.radius = radius
    this.getDiameter = function() {
        return 2 * this.radius
    }
}

const circle3 = Circle(15)

console.log(circle3)
console.log(radius)

// new 연산자가 없이 호출되었기 때문에 생성자 함수가 아닌 일반 함수로 호출됨.
// 일반함수로 호출된 circle내의 this는 전역객체를 가리킴

const circle4 = new Circle(16)
console.log(circle4)
console.log(circle4.getDiameter())