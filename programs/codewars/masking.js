// Input & output
    // Test.assertEquals(maskify('4556364607935616'), '############5616');
    // Test.assertEquals(maskify('1'), '1');
    // Test.assertEquals(maskify('11111'), '#1111');

const masking = (cc)=>{
    let customString = "";
    const lastFourChar = cc.substr(cc.length - 4);
    for(let i=0;i<cc.length-4;i++){
        customString = customString+"#";
    }
    return customString + lastFourChar.trim();
}

console.log(masking("4556364607935616") === "############5616");
