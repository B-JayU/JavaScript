// 일반적인 함수
//  함수 구현부에 아무 내용이 없는 undefinedfunction
function Person() {}

// 함수명 앞에 new 를 붙이면 함수는 더 이상 일반적인 함수로써의 사용이 아니라
// 생성자 라고 하여 하나의 객체를 생성하게 된다. 
var p1 = new Person();

// new를 통해서 비어있는 객체를 생성하게 된다.

// 변수 p에는 Person이라는 이름을 가진 객체가 생성되어 대입된다. (객체의 생성자)
// console.log(p)를 실행하면 Person {} 가 나옴을 확인할 수 있다. 
p1.name = 'b-jay';
p1.introduce = function() {
	return 'My name is ' + this.name;
}
document.write(p1.introduce());

var p2 = new Person();
p2.name = 'leezche';
p2.introduce = function() {
	return 'My name is ' + this.name;
}
document.write(p2.introduce());

/*
	자바에서 클래스 개념이 존재
	클래스 내부에 생성자가 존재
	생성자는 클래스에 속해 있고, 이 생성자 호출을 통해 클래스의 인스턴스(객체)를 생성한다. 
*/

/*
	자바스크립트에서는
	생성자는 어느 클래스에도 속해 있지 않으며
	함수 이름 앞에 new를 붙이면 객체를 만들어내는 생성자가 된다. 
*/