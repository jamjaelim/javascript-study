let person = {
    name : 'Sim'
}

console.log(person.name)

console.log(person['name'])

// 프로퍼티에 접근하기 위해서는
// 마침표 표기법과 대괄호 표기법을 사용할 수 있다.
// 대괄호 표기법을 사용하는 경우 대괄호 프로퍼티 접근 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열이어야 한다.
// 대괄호 표기법 사용시 프로퍼티 키를 따옴표로 감싸지 않으면 
// 자바스크립트 엔진은 이를 식별자로 해석하기 때문에 Reference error가 발생한다.
// 객체에 존재하지 않는 프로퍼티에 접근한 경우 undefined를 반환한다. - Reference error X
 