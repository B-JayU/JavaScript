function zero() {
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}
zero();

function one(arg1) {
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}
one('val1', 'val2');

function two(arg1, arg2) {
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
}
two();

    // funcion.length : �Լ��� ���ǰ� �Ű������� �� ���ΰ� 
    // arguments.length : ����ڰ� ������ �Լ� ������ ����