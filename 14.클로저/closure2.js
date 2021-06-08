
// 혼동하기 쉬운 실수

var arr = [];
for (var i = 0; i < 5; i++) {                       
    arr[i] = function() {                           
        return i; 
    }
}

for (var index in arr) {
    console.log(arr[index]());
}

// function() { return i; }를 내부함수로 하는 외부함수를 정의하고 그 외부함수의 지역변수 값을 내부함수가 참조하도록 수정

//  function(id) {

//     return function() {
//         return id;
//     }
// }(i);


var arr = [];
for (var i = 0; i < 5; i++) {
    arr[i] = function(id){
        return function() {
            return id;
        }
    }(i); 
}

for (var index in arr) {
    console.log(arr[index]());
}