// https://assessment.hackerearth.com/challenges/hiring/thoughtworks-coding-challenge/algorithm/trick-with-the-cards/description/

// Mr. X is performing a trick with the cards. He has N cards, lets name them 1.....N, on a round table. So card 1 is in between 2nd card and Nth card. Initially all cards are upside down. His trick involves making all cards face up.

// His trick is whenever he taps on a card, it flips (if card was originally upside down, after flipping its faces up, and vice-versa), but he is no ordinary magician, he makes the two adjacent cards (if any) also to flip with the single tap. Formally, if he taps ith card, then i-1, i, i+1 cards are flipped. (Note that if he taps Nth card, then he flips (N-1)th, Nth and 1st card.)

// Our magician needs a helper, to assist him in his magic tricks. He is looking for someone who can predict minimum number of taps needed to turn all the cards facing up.

// Input :
// First line of input contains T, the number of test cases. Then T lines follows, each line contains N, the number of cards for that particular case.

// Output :
// Print the output for each case in a single line.

// Constraints :
// 1 <= T <= 10^5
// 0 <= N <= 10^15

// Solution Based ob hackerearth 

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});
var flipCard = (n)=>{
    if(n>3){
        if(n % 3 === 0){
            console.log(n/2);

        }else{
            let c = n/3;
            let res = Math.ceil(c);
            console.log(res);
        }
    }else{
		if(n === '3'){
            console.log();
		}else{
            console.log(1);
		}
    }
}
function main(input) {
   // process.stdout.write("Hi, " + input + ".\n");   
       // Writing output to STDOUT
       input = input.split(/\s+/);
       for (var i=0;i<input.length;i++){
           flipCard(input[i]);
       }
}