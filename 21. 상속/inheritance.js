function Person(name) {
	this.name = name;
	this.introduce = function() {
		return 'My name is ' + this.name;
	}
}

var p1 = new Person('B-JayU');
document.write(p1.introduce()+"<br />");
