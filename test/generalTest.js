// var arrays = [
//     ["$6"],
//     ["$12"],
//     ["$25"],
//     ["$25"],
//     ["$18"],
//     ["$22"],
//     ["$10"]
//   ];

// var merged = [].concat.apply([],arrays);
// console.log("merged",merged);

// let obj = { id: "1", name: "Test User", age: "25", profession: "Developer" };

// // keys 
// let keys = Object.keys(obj);
// console.log("keys",keys);
// // Values
// let values = Object.values(obj);
// console.log("values",values);
// // entities
// let entries = Object.entries(obj);
// console.log("entries",entries);
// var a = []

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   printName: function() {
//     console.log(this.firstName + ' ' + this.lastName);
//   }
// };
// person.printName.call(person);
// printFullName();

// var myArr = ['Apple', 'Orange', 'Mango'];
// myArr.splice(0, 0, "Pineapple");  // At 0th Index
// myArr.splice(2, 0, "Strawberries"); // At 4rth Index

// console.log("myArr",myArr);

// Ex. Input  :  babacbd
//     Output :  a2b3c1d1

// const countChar = (inp)=>{
//      var inp1 = inp.split("").sort();
//     var count = {};
//     for(var i=0;i<inp1.length;i++){
//         if(!count[inp1[i]]){
//             count[inp1[i]] = 1;
//         }else{
//             count[inp1[i]] = count[inp1[i]]+1;
//         }
//     }
//     var res = "";
//     for (pro in count){
//         res+= pro+count[pro];
//     }
//     return res;
// }
// console.log(countChar("babacbd")=== "a2b3c1d1");


// var flipCard = (n)=>{
//     if(n>3){
//         if(n % 3 === 0){
//             console.log(n/2);

//         }else{
//             let c = n/3;
//             let res = Math.ceil(c);
//             console.log(res);
//         }
//     }else{
// 		if(n===0){
//             console.log(0);
// 		}else{
//             console.log(1);
// 		}
//     }
// }
// flipCard(100)



// var findString = (sortString,longString)=>{
//     var compare = [];
//     var notCompare = [];
//     for(var i=0; i < sortString.length; i++){
//         for(var j=0; j< sortString.length; j++){
//             if(longString[i] === sortString[j]){
//                 compare.push(longString[i]);
//             }else{
//                 notCompare.push(longString[i]);
//             }
//         }
//     }
//     if(compare.length === sortString.length){
//         return 1;
//     }else if(compare.length === 0){
//         return -1
//     }else{
//         return compare.length;
//     }
// }
const StartFrom = (sortString,longString,minStart)=>{
    var comp = [];
    for(let i =0; i<minStart;i++){
        if(sortString[i] === longString[i]){
            comp.push(i);
        }
    }
    if(comp.length === 2){
        for(let i =2; i < sortString.length; i++){
            if(sortString[i] == longString[i]){
                comp.push(i);
            }
        }
        if(comp.length === sortString.length){
            return 1;
        }else{
            return longString.length - comp.length; 
        }
    }else{
        if(comp.length === 1){
            return longString.length - comp.length; 
        }else{
            return 0;
        }
    }
}
const endFrom = (sortString,longString,minStart)=>{
    var comp = [];
    for(let i =1; i<=minStart;i++){
        if(sortString[sortString.length -i] === longString[longString.length-i]){
            comp.push(i);
        }
    }
    if(comp.length === 2){
        for(let i=3; i<= sortString.length; i++){
            if(sortString[sortString.length-i] === longString[longString.length-i]){
                comp.push(i);
            }
        }
        if(comp.length === sortString.length && comp.length === 2){
            return longString.length - comp.length; 
        }else if(comp.length === sortString.length){
            return -1
        }
        else{
            return longString.length - comp.length; 
        }
    }else{
        if(comp.length === 1){
            return longString.length - comp.length; 
        }else{
            return 0;
        }
    }
}
const findString = async (sortString,longString)=>{
    var sortString = sortString.split("");
    var longString = longString.split("");
    var minStart = 2;
    var st = await StartFrom(sortString,longString,minStart);
    if(st === 0){
        var ed = await endFrom(sortString,longString,minStart)
        if(ed === 0){
            return -1
        }else{
            return ed;
        }
    }else{
        return st;
    }
  }
  
console.log(findString("ld","helloworld"));
// findString("hello","helloworld").then((res)=>{
//     console.log(res);
// })
// findString("test","hithere").then((res)=>{
//     console.log(res);
// })
// findString("ld","helloworld").then((res)=>{
//     console.log(res);
// })