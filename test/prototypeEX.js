// function Persion(firstName,lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// Persion.prototype.age = 30;
// Persion.prototype.fullName = function(){
//     return this.firstName+ " " + this.lastName+ " " + this.age
// }

// var a = new Persion("Aamod","Tiwari");

// console.log(a.age);

// function testqwqw(city, country){
//     return this.firstName + " " + this.lastName + " " + city + " " + country
// }

// var person1 = {
//     firstName:"aamod",
//     lastName:"tiwari"
// }

// var x1 = testqwqw.apply(person1, ["Oslo","Norway"]);
// console.log(x1);


// function fullName(city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
// }
// var person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// var x = fullName.apply(person1, ["Oslo", "Norway"]); 
// console.log("xxxxxxxxx",x);

function mask(cc){
    var str="";
    var fourCh = cc.substr(cc.length - 4)
    for(var i=0;i<cc.length-4;i++){
      str = str+"#";
     }
    return str+fourCh.trim()
   }
   console.log(mask("13123123"));