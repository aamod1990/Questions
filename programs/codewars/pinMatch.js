// input and output
// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false

// const validatePIN = (pin)=>{
//     if(pin.match(/^[0-9]+$/) && (pin.length === 4 || pin.length === 6)){
//         return true;
//     }
//     return false
// }

// function validatePIN(pin) {
//     return /^(\d{4}|\d{6})$/.test(pin)
// }
function validatePIN (pin) {
    return  (pin.length == 4 || pin.length == 6) && parseInt(pin) == pin
}
console.log(validatePIN("1234") === true)
console.log(validatePIN("12345") === false)
console.log(validatePIN("a234") === false)
