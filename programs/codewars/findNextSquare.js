// Input and output
// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    return Math.sqrt(sq)%1?-1:Math.pow(Math.sqrt(sq)+1,2)
}

console.log(findNextSquare(121) === 144);
console.log(findNextSquare(625) === 676);
console.log(findNextSquare(114) === -1);

