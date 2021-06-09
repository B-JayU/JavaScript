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

    // funcion.length : 함수가 정의가 매개변수가 몇 개인가 
    // arguments.length : 사용자가 전달한 함수 인자의 개수