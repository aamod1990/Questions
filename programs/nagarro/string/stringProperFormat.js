//https://www.geeksforgeeks.org/nagarro-interview-experience-for-1-5-year-software-developer/

//  Count the letter in the string and provide in proper format
// Ex. Input  :  babacbd
//     Output :  a2b3c1d1

// ES-5

function countCharFromString(inp){
    var assendingOrder = inp.split('').sort().join('');
    var count = {};
    var countedString = "";
    for(var i=0;i<assendingOrder.length;i++){
        if(!count[assendingOrder[i]]){
            count[assendingOrder[i]] = 1;
        }else{
            count[assendingOrder[i]] = count[assendingOrder[i]]+1;
        }
    }
    for(var c in count){
        countedString = countedString + c + count[c];
    }
    return countedString;
}
console.log(countCharFromString("babacbd"));

// ES-6

const countCharFromStringES6 = (inp)=>{
    let assOrderString = inp.split('').sort().join('');
    let count = {};
    let countedChar = "";
    for(let i=0; i<assOrderString.length; i++){
        if(!count[assOrderString[i]]){
            count[assOrderString[i]] = 1;
        }else{
            count[assOrderString[i]] = count[assOrderString[i]]+1;
        }
    }
    for( let i in count){
        countedChar = countedChar + i +count[i];
    }
    return countedChar;
}
console.log(countCharFromStringES6("babacbd"));