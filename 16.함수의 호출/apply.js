// �Լ� ȣ���ϴ� ���
function func() {

}
func();

// �ڹٽ�ũ��Ʈ�� �Լ��� ��ü
// func()�� function �̶�� ��ü�� �ν��Ͻ�
// function ��ü���� �����ϴ� ���� �޼ҵ� : Function.apply, Function.call

function sum(arg1, arg2) {
    return arg1 + arg2;
}

alert(sum.apply(null, [1,2]));
