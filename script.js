//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get myName(){
		return this.name;
	}

	set myName(value){
		this.name=value;
	}
}

class Student extends Person {
	super(name,age);
	study(){
		return this.name + " is studing."
	}
}

class Teacher extends Person {}
    super(name,age);
	teach(){
		return this.name + " is teaching."
	}
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
