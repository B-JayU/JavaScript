function a() {}  // 함수 a를 변수 a에 담는다.

var a = function() {} // 함수는 값으로서 변수 a에 대입된다.

a = { // 객체 a는 'b' 라는 key에 대해서 function()를 값으로 가진다.
    b:function() { // method

    }
}