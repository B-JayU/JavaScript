function func(){
	alert('Hello?');
}
func();

window.func();
// window : ��ü
// .func() : ��ü�� ��� �Ӽ� -> ���� -> �� �Ӽ��� �޼ҵ��̴�.
// func()�� window ��ü�� �޼ҵ�

var o = {'func':function(){
	alert('Hello?');
}}
o.func();
window.o.func();

//�ڹٽ�ũ��Ʈ���� ��� ��ü�� �⺻������ ������ü�� property�̴�
