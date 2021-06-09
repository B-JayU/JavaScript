// 함수 호출하는 방법
function func() {

}
func();

// 자바스크립트는 함수도 객체
// func()는 function 이라는 객체의 인스턴스
// function 객체에서 제공하는 내장 메소드 : Function.apply, Function.call

function sum(arg1, arg2) {
    return arg1 + arg2;
}

alert(sum.apply(null, [1,2]));
