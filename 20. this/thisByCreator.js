var funcThis = null;

function Func(){
	funcThis = this;
}

var o1 = Func();	// 함수로서의 값 전달 

if (funcThis === window){
	document.write('window </br>');
}

var o2 = new Func();	// 생성자

if (funcThis ===  o2){
	document.write('o2 </br>');
}


// 객체 - 주인 (master)
// 메소드 - 노예 (slave)
