let arr = ["1", "Test User", "25", "Developer"];

//Method 1: Using Object.assign() method

const objeAssign = Object.assign({},arr);
console.log("Using Assign ",objeAssign);

// Method 2 Using Spread operator
const objSpre = {...arr};
console.log("obj-Spread",objSpre);
