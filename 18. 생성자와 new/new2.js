function Person(name) {		// 지난 학습의 papameter과 argument의 내용을 상기할 것
	this.name = name;
	this.introduce = function() {
		return 'My name is ' + this.name + '<br />';
	}
}

// 생성자 내에서 이 객체의 파라미터를 정의하고 있다.
// 객체 생성시 name 파라미터로 전달될 인자값을 전달한다. (name : parameter, 'b-jay', 'leezche' : arguments)
// 이러한 작업을 객체의 초기화라고 하며, 이를 통해서 코드의 재사용성을 대폭 증가시킬 수 있다.

var p1 = new Person('b-jay');
document.write(p1.introduce());

var p2 = new Person('leezche');
document.write(p2.introduce());

