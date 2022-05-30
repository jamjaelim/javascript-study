let x = 'global'

function foo() {
    let x ='local'
    console.log(x)
}
//  x를 출력하기 전에 1. 자기 렉시컬 환경 안에 x가 있는 지 확인해본다. 2. 없으면 밖에서 가져온다.

foo()

console.log(x)

foo()

function babo(a, b) {
   // console.log(a, b)
    return x + a + b
}

babo(3, 4)

console.log(babo(3, 4))