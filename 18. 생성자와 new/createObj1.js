var person = {}
person.name = 'egoind';
person.introduce = function() {
	return 'My name is ' + this.name; // this.name�� �� �����Լ��� ��� �ִ� ��ü�� .name�� �ǹ��Ѵ�.
}

document.write(person.introduce());

