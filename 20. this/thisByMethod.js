var o = {
	func : function() {
		if (o === this) {	// method�� ȣ���� ��ü�� o�ΰ�?
			document.write("o === this");
		}
	}
}
o.func();

// func() �� o ��� ��ü�� method��� �� �� ����.
