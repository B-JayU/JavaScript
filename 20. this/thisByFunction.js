function func() {
	if(window === this) {
		document.write("window === this");
	}
}
func();

/*
	this는 함수 내에서 함수 호출 맥략(context)를 의미한다.
	상황에 따라서 달라진다는 의미
	함수를 어떻게 호출하느냐에 따라서 this가 가리키는 대상이 달라진다는 의미
*/

/*
 	func() 는 window 라는 전역 객체의 method라고 할 수 있음.
	window 라는 객체명은 생략할 수 있다.
 */