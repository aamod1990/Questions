/*
what is object :- 
   Object is unorder callection of data in the form of key value pair
   All javascript is an object based and case sensitive 
   There is many way that we can create object
      1) object literal
      2) object constructor
      3) object.create method
      4) using function 
      5) using class
*/

// function test(callback){
//    var name = "Aamod Tiwari";
//    setTimeout(function(){
//       return callback(null,name);
//    },10000)
// }

// function finished(err,result){
//    console.log(err,result);
// }
// test(finished);
// console.log("Completed");

// function first(callback){
   // setTimeout(function(){
   //    console.log(1);
   //    callback()
   // },1000)
//    }
//    function second(){
//    console.log(2);
//    }
// first(second);


// function first(value){
//    return new Promise((resolve,reject)=>{
//       if(value ===1){
//          resolve(1);
//       }else{
//          reject(0);
//       }
//    })
// }
// function second(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(function(){
//          resolve(2);
//       },10000)
//    })
// }
// function thired(){
//    console.log(3);
// }
// first(1).then((result)=>{
//    console.log(result);
//    second().then((data)=>{
//       console.log(data);
//       thired()
//    })
// })

// function secound(){
//    return 2;
// }
// function thired(){
//    return 3;
// }
// async function first(){
//    var a = await secound()
//    console.log(a);
//    var b = await thired()
//    console.log(b);
// }
// first();

// function Person(first, last, age, eye) {
//    this.firstName = first;
//    this.lastName = last;
//    this.age = age;
//    this.eyeColor = eye;
//  }

//  function fullName(){
//    return `${this.firstName} ${this.lastName}`
// };
//  Person.prototype.fullName =  fullName

//  var a = new Person("aamod","tiwari",29,"blue");
//  console.log(a.fullName());

const obj = {first: 'Asim', last: 'Hussain', age: 39 };

var {first:f,last:l,age:a} = obj;
console.log(f);
console.log(l);
console.log(a);

var {first,last}
