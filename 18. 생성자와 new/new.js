// �Ϲ����� �Լ�
//  �Լ� �����ο� �ƹ� ������ ���� undefinedfunction
function Person() {}

// �Լ��� �տ� new �� ���̸� �Լ��� �� �̻� �Ϲ����� �Լ��ν��� ����� �ƴ϶�
// ������ ��� �Ͽ� �ϳ��� ��ü�� �����ϰ� �ȴ�. 
var p1 = new Person();

// new�� ���ؼ� ����ִ� ��ü�� �����ϰ� �ȴ�.

// ���� p���� Person�̶�� �̸��� ���� ��ü�� �����Ǿ� ���Եȴ�. (��ü�� ������)
// console.log(p)�� �����ϸ� Person {} �� ������ Ȯ���� �� �ִ�. 
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
	�ڹٿ��� Ŭ���� ������ ����
	Ŭ���� ���ο� �����ڰ� ����
	�����ڴ� Ŭ������ ���� �ְ�, �� ������ ȣ���� ���� Ŭ������ �ν��Ͻ�(��ü)�� �����Ѵ�. 
*/

/*
	�ڹٽ�ũ��Ʈ������
	�����ڴ� ��� Ŭ�������� ���� ���� ������
	�Լ� �̸� �տ� new�� ���̸� ��ü�� ������ �����ڰ� �ȴ�. 
*/