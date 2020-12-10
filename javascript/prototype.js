// refrence link
// https://www.tutorialsteacher.com/javascript/prototype-in-javascript
// https://www.w3schools.com/js/js_object_prototypes.asp
// https://www.tutorialsteacher.com/javascript/inheritance-in-javascript


/*
What is prototype :-
    Prototype is hidden property of javascript object. All javascript object inherit properity and method from a prototype
*/

function passPortDetails(name,age,city){
    this.name = name;
    this.age = age;
    this.city = city
}

passPortDetails.prototype.nationality = "indian";
passPortDetails.prototype.checkAge = function(){
    if(this.age > 18){
        return this.age;
    }else{
        return "underAge"
    }
}
var pass = new passPortDetails("Aamod",29,"pune");
console.log(pass.checkAge());



/*
What is inheritance : Inheritance is an important concept in object oriented programing. In other language 
derived class inherit the base class property and method
But In javascript inheritance supported by prototype
*/

function BMW_X1(modelName,modelYear){
    this.modelName = modelName;
    this.modelYear = modelYear;
}
BMW_X1.prototype.specification = function(){
    return "1500 cc";
}

function BMW_X2(modelName,modelYear,newFeatue){
    BMW_X1.call(this,modelName,modelYear);
    this.newFeatue = newFeatue;
}

BMW_X2.prototype = new BMW_X1();
BMW_X2.prototype.constructor = BMW_X2;

var ins = new BMW_X2("BMW_X1-A","2020","sun-rufe");
console.log(ins.newFeatue);
console.log(ins.specification());

console.log(ins instanceof BMW_X1)
console.log(ins instanceof BMW_X2)