var funcThis = null;

function Func(){
	funcThis = this;
}

var o1 = Func();	// �Լ��μ��� �� ���� 

if (funcThis === window){
	document.write('window </br>');
}

var o2 = new Func();	// ������

if (funcThis ===  o2){
	document.write('o2 </br>');
}


// ��ü - ���� (master)
// �޼ҵ� - �뿹 (slave)
