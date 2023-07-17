//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get myName(){
		return this._name;
	}

	set myName(value){
		this._name=value;
	}
}
var person = new Person("Rahul",28);

class Student extends Person {
	constructor(name, age) {
        super(name, age);
      }
	study(){
		//return this.name + " is studing."
        console.log(this._name + " is studing.");
	}
}
var student = new Student("Saksham",15);
student.study();

class Teacher extends Person {
    constructor(name, age) {
        super(name, age);
      }
	teach(){
		//return this.name + " is teaching."
        console.log(this._name + " is teaching.");
	}
}
   
var teacher = new Teacher("Manjeet",25);
teacher.teach();
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
