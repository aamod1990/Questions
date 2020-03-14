// remove adjacent duplicate characters from string
// adjacent means nearest characters
// ex:
// input: AAABBCDDDAAD
// output: ABCDAD
const removeAdjacentValues = (value)=>{
    return new Promise((resolve,reject)=>{
        if(value){
            const len = value.length;
        let newString = "";
        for(let i=1;i<len+1;i++){
            if (value[i] != value[i - 1]) {
            newString+=value[i-1];
            }
        }
        return resolve(newString)
        }
        return reject("Please pass the corresponding argument");
    })
}
removeAdjacentValues("AAABBCDDDAAD").then((result)=>{
    console.log(result);
}).catch((error)=>{
console.log(error);
})