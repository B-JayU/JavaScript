// 함수는 값이기 때문에 다른 함수의 인자로 전달 할 수도 있다. 

function cal(func, num) {
    return func(num);
}

function increase(num) {
    return num+1;
}

function decrease(num) {
    return num-1;
}

alert(cal(increase, 1));
alert(cal(decrease, 1));