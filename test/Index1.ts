interface human {
    firstName:String,
    lastName:String
}

class Person implements human{
    constructor(public firstName, public lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    protected whoAreYou(){
        return `I am ${this.firstName} ${this.lastName}`
    }
}

class Student extends Person{
    constructor(public firstName,public lastName,public course){
        super(firstName,lastName)
        this.course = course;
    }

    whoAreYou1(){
        return `${super.whoAreYou()} doing ${this.course}`
    }
}
let asim = new Student("Asim", "Hussain", "typescript");
console.log(asim.whoAreYou1());