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
var student = new Student("Saksham",15);
student.study();

class Teacher extends Person {
	 super(name,age);
	teach(){
		return this.name + " is teaching."
	}
}
   
var teacher = new Teacher("Manjeet",25);
teacher.teach();
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
