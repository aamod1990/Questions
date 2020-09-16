// object to array
let obj = { id: "1", name: "Test User", age: "25", profession: "Developer" };

//Method 1: Convert the keys to Array using - Object.keys()

const keys = Object.keys(obj);
console.log("keys",keys);

// Method 2 Converts the Values to Array using - Object.values()
const values = Object.values(obj);
console.log("values",values);

// Method 3 Converts both keys and values using - Object.entries()

const entries = Object.entries(obj);
console.log("entries",entries);

// Merged 1 : multiple array into single array 
const merged = [].concat.apply([],entries);

console.log("merged",merged);
