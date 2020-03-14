// Compare two arrays and find difference between them?
// Input1 : ["a","b"],["a","b","c","d"] , "abc","abce" , [2,3,5,7],[6,7,8,9,10]
// output1 :[ 'c', 'd' ],  ['e'],  [ '2', '3', '5', '6', '8', '9', '10' ]

const firstOperation = (array1)=>{
    let updateArray = [];
    return new Promise((resolve,reject)=>{
        if(array1.length >0){
            for(let i=0;i<array1.length;i++){
                updateArray[array1[i]] = true;
            }
            return resolve(updateArray);
        }else{
            return reject([]);
        }
    })
}
const findDifference = (ar1,ar2)=>{
    return new Promise(async (resolve,reject)=>{
        let diff = [];
        await firstOperation(ar1).then((result)=>{
            for(let i=0;i<ar2.length;i++){
                if(result[ar2[i]]){
                    delete result[ar2[i]];
                }else{
                    result[ar2[i]] = true;
                }
            }
            for(a in result){
                diff.push(a);
            }
            return resolve(diff)
        }).catch((error)=>{
            return reject(error);
        })
        console.log("finish");
    })
}

findDifference(["a","b"],["a","b","c","d"]).then((result)=>{
    console.log("result",result);
}).catch((error)=>{
    console.log("error",error);
})
findDifference("abc","abce").then((result)=>{
    console.log("result",result);
}).catch((error)=>{
    console.log("error",error);
})
findDifference([2,3,5,7],[6,7,8,9,10]).then((result)=>{
    console.log("result",result);
}).catch((error)=>{
    console.log("error",error);
})