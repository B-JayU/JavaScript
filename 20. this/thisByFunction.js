function func() {
	if(window === this) {
		document.write("window === this");
	}
}
func();

/*
	this�� �Լ� ������ �Լ� ȣ�� �Ʒ�(context)�� �ǹ��Ѵ�.
	��Ȳ�� ���� �޶����ٴ� �ǹ�
	�Լ��� ��� ȣ���ϴ��Ŀ� ���� this�� ����Ű�� ����� �޶����ٴ� �ǹ�
*/

/*
 	func() �� window ��� ���� ��ü�� method��� �� �� ����.
	window ��� ��ü���� ������ �� �ִ�.
 */