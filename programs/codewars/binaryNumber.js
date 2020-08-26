// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.

// input (1,2)
// output : 11 

function addBinary(a,b) {
    return (a+b).toString(2)
}

console.log(addBinary(1,2) === "11");
console.log(addBinary(51,12) === "111111");