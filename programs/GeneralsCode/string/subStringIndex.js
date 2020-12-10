// Input : "hello","helloworld"
// Output : 1

// Input : "test", "hithere"
// output : -1

// Input : "ld" , "helloworld"
// Output : 8

// Without any library functions

const StartFrom = (sortString, longString, minStart) => {
    var comp = [];
    for (let i = 0; i < minStart; i++) {
        if (sortString[i] === longString[i]) {
            comp.push(i);
        }
    }
    if (comp.length === 2) {
        for (let i = 2; i < sortString.length; i++) {
            if (sortString[i] == longString[i]) {
                comp.push(i);
            }
        }
        if (comp.length === sortString.length) {
            return 1;
        } else {
            return longString.length - comp.length;
        }
    } else {
        if (comp.length === 1) {
            return longString.length - comp.length;
        } else {
            return 0;
        }
    }
}
const endFrom = (sortString, longString, minStart) => {
    var comp = [];
    for (let i = 1; i <= minStart; i++) {
        if (sortString[sortString.length - i] === longString[longString.length - i]) {
            comp.push(i);
        }
    }
    if (comp.length === 2) {
        for (let i = 3; i <= sortString.length; i++) {
            if (sortString[sortString.length - i] === longString[longString.length - i]) {
                comp.push(i);
            }
        }
        if (comp.length === sortString.length && comp.length === 2) {
            return longString.length - comp.length;
        } else if (comp.length === sortString.length) {
            return -1
        }
        else {
            return longString.length - comp.length;
        }
    } else {
        if (comp.length === 1) {
            return longString.length - comp.length;
        } else {
            return 0;
        }
    }
}
const findString = async (sortString, longString) => {
    var sortString = sortString.split("");
    var longString = longString.split("");
    var minStart = 2;
    var st = await StartFrom(sortString, longString, minStart);
    if (st === 0) {
        var ed = await endFrom(sortString, longString, minStart)
        if (ed === 0) {
            return -1
        } else {
            return ed;
        }
    } else {
        return st;
    }
}

findString("hello","helloworld").then((res)=>{
    console.log(res);
})
findString("test","hithere").then((res)=>{
    console.log(res);
})
findString("ld","helloworld").then((res)=>{
    console.log(res);
})