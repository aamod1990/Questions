// https://www.geeksforgeeks.org/nagarro-interview-experience-for-1-5-year-software-developer/

// ex:- Input : First_variable 
//      OutPut : FirstVariable


// ES-5

function StringManupulation(inp){
    var secondString = inp.split("_")[1][0].toUpperCase()+ inp.split("_")[1].slice(1);
    return inp.split("_")[0] + secondString;
}
var result = StringManupulation("First_variable");
console.log(result);

// ES-6

const StringManupulationES6 = (inp)=>{
    let secondString = inp.split("_")[1][0].toUpperCase() + inp.split("_")[1].slice(1);
    return inp.split("_")[0] + secondString
}

const resultES6 = StringManupulationES6("First_variable");
console.log("resultES6",resultES6);