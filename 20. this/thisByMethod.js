var o = {
	func : function() {
		if (o === this) {	// method를 호출한 객체가 o인가?
			document.write("o === this");
		}
	}
}
o.func();

// func() 는 o 라는 객체의 method라고 할 수 있음.
