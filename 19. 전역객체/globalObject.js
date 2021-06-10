function func(){
	alert('Hello?');
}
func();

window.func();
// window : 객체
// .func() : 객체의 어떠한 속성 -> 실행 -> 이 속성은 메소드이다.
// func()는 window 객체의 메소드

var o = {'func':function(){
	alert('Hello?');
}}
o.func();
window.o.func();

//자바스크립트에서 모든 객체는 기본적으로 전역객체의 property이다
