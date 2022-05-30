//console.log(foo)
//var는 선언 단계와 초기화 단계가 한 번에 이루어지 때문에 변수 호이스팅 시 초기화가 한꺼번에 일어난다.
//let은 선언 단계와 초기화 단계가 따로 일어나기 때문에 변수 호이스팅 시 일시적 사각지대가 생길 수 있다.


let foo

console.log(foo)

foo = 1

console.log(foo)