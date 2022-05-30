let foo = 1

{
    let foo = 2
    let bar = 3
}

console.log(foo)
console.log(bar)

//var는 함수 레벨 스코프를 따르기 때문에 함수가 아닌 코드 블록 내에서 선언될 경우 전역 변수로 활동.
//let은 블록 레벨 스코프를 따르기 때문에 모든 코드 블록을 지역 스코프로 인정.
//      코드 블록 내에서 선언될 경우 지역 변수로 활동.