// �Լ����� arguments��� ������ ��� ������ ���� �迭�� �ִ�.
// �� �迭���� �Լ��� ȣ���� �� �Է��� ���ڰ� ����ִ�.

function sum() { // �Լ� sum()�� �Լ� �Ű�����(parameter)�� ��õǾ� ���� �ʴ�.
    var i, _sum = 0; // _sum : private variable 
    for(i = 0; i < arguments.length; i++) {
        document.write(i + ' : ' + arguments[i] + '<br />');
        _sum += arguments[i];
    }
    return _sum;
}
document.write('result : ' + sum(1,2,3,4)); // sum() �Լ� ȣ�⿡�� ����(��, argument)�� �����ϰ� �ִ�.

// �Լ� ȣ��� ���޵Ǵ� ������ ������ ���� �� �� ���ٸ�
// �Լ� ����ο��� �Ķ���͸� �������� �ʰ� ������ ��ӵ� arguments �迭�� Ȱ���ϵ��� �Ѵ�.
