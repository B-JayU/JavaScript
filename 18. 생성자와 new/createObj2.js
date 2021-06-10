var person1 = {
	'name' : 'b-jay',
	'introduce' : function() {
		return 'My name is ' + this.name;
	}
}

var person2 = {
	'name' : 'leezche',
	'introduce' : function() {
		return 'My name is ' + this.name;
	}
}

document.write(person.introduce());
document.write(person2.introduce());
