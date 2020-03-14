// How to add element in beginning and end of the Array
// Input Start : Angular
// End : Node
// output : [ 'MongoDB','ElasticSearch','WebRTC','WebSocket','Socket.io','Node' ]

const elementManagement = (arg)=>{
    const technology = ["MongoDB","ElasticSearch","WebRTC","WebSocket","Socket.io"];
    return new Promise((resolve,reject)=>{
        if(Object.keys(arg)[0] === "start"){
            technology.unshift(arg["start"]);
            resolve(technology);
        }else if(Object.keys(arg)[0] === "end"){
            technology.push(arg["end"]);
            resolve(technology);
        }else{
            reject("argument should be in standared format")
        }
    })
}

elementManagement({"end":"Node"}).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error)
})