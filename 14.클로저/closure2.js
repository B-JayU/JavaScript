
// ȥ���ϱ� ���� �Ǽ�

var arr = [];
for (var i = 0; i < 5; i++) {                       
    arr[i] = function() {                           
        return i; 
    }
}

for (var index in arr) {
    console.log(arr[index]());
}

// function() { return i; }�� �����Լ��� �ϴ� �ܺ��Լ��� �����ϰ� �� �ܺ��Լ��� �������� ���� �����Լ��� �����ϵ��� ����

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