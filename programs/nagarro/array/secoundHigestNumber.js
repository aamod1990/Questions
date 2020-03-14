// Print second-highest number from given array.
// Input  = [20, 120, 111, 215, 54, 78]; 
// Output = 120

function secondHightNumber(inp){
    return inp.sort(function(a,b){return b-a})[1]
}
console.log(secondHightNumber([20, 120, 111, 215, 54, 78]))