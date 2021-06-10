var person = {}
person.name = 'egoind';
person.introduce = function() {
	return 'My name is ' + this.name; // this.name은 이 실행함수를 담고 있는 객체의 .name을 의미한다.
}

document.write(person.introduce());

