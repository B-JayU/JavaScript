// 함수에는 arguments라는 변수에 담긴 숨겨진 유사 배열이 있다.
// 이 배열에는 함수를 호출할 때 입력한 인자가 담겨있다.

function sum() { // 함수 sum()은 함수 매개변수(parameter)가 명시되어 있지 않다.
    var i, _sum = 0; // _sum : private variable 
    for(i = 0; i < arguments.length; i++) {
        document.write(i + ' : ' + arguments[i] + '<br />');
        _sum += arguments[i];
    }
    return _sum;
}
document.write('result : ' + sum(1,2,3,4)); // sum() 함수 호출에서 인자(값, argument)를 전달하고 있다.

// 함수 호출시 전달되는 인자의 개수를 예측 할 수 없다면
// 함수 선언부에서 파라미터를 지정하지 않고 내부의 약속된 arguments 배열을 활용하도록 한다.
