function Person(name) {		// ���� �н��� papameter�� argument�� ������ ����� ��
	this.name = name;
	this.introduce = function() {
		return 'My name is ' + this.name + '<br />';
	}
}

// ������ ������ �� ��ü�� �Ķ���͸� �����ϰ� �ִ�.
// ��ü ������ name �Ķ���ͷ� ���޵� ���ڰ��� �����Ѵ�. (name : parameter, 'b-jay', 'leezche' : arguments)
// �̷��� �۾��� ��ü�� �ʱ�ȭ��� �ϸ�, �̸� ���ؼ� �ڵ��� ���뼺�� ���� ������ų �� �ִ�.

var p1 = new Person('b-jay');
document.write(p1.introduce());

var p2 = new Person('leezche');
document.write(p2.introduce());

