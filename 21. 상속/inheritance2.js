function Person(name) {
	this.name = name;
}

Person.prototype.name = null;
Person.prototype.introduce = function () {
	return 'My name is ' + this.name;
}

var p1 = new Person('B-JayU');
document.write(p1.introduce() + "<br />");