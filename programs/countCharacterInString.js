// count character in string
const calculateString = (str)=>{
    let updatedString = [];
    let count ={};
    return new Promise((resolve,reject)=>{
        if(str){
            for(let i=0;i<str.length;i++){
                updatedString[str[i]] = true;       
            }
            for(let j=0;j<str.length;j++){
                if(updatedString[str[j]]){
                    count[str[j]] = 1;
                    delete updatedString[str[j]];
                }else{
                    count[str[j]] = count[str[j]] + 1;
                }
            }
            return resolve(count);
        }else{
            return reject("string required");
        }
    })
}

calculateString("asdasdasdaggadf").then((result)=>{
    console.log("resultresult",result);
}).catch((error)=>{
    console.log(error);
})
