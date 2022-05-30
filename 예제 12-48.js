function outer() {
    let x = 1

    function inner() {
        let y = 2

        console.log(x + y)
    }

    inner()

}

outer()


// 함수 내부에 정의된 함수 : 중첩 함수 or 내부 함수 : 외부 함수의 헬퍼 함수 역할을 수행
// 중첩 함수를 포함하는 함수 : 외부 함수