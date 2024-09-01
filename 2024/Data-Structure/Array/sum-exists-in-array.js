/* Check if pair with given Sum exists in Array (Two Sum)

Given an array A[] of n numbers and another number x, 
the task is to check whether or not there exist two elements 
in A[] whose sum is exactly x. 

Examples: 
Input: arr[] = {0, -1, 2, -3, 1}, x= -2
Output: Yes

Explanation:  If we calculate the sum of the output,1 + (-3) = -2

Input: arr[] = {1, -2, 1, 0, 5}, x = 0
Output: No
*/


const checkPair = (arr, num, size)=>{
    for(let i = 0; i < size-1; i++){

        for(let j=i+1; j< size; j++ ){

            if(arr[i] + arr[j] == num){
                console.log(`Pair with given number ${num} is (${arr[i]}, ${arr[j]})`);

                return true;
            }
        }
    }
    return false
}

let A = [ 0, -1, 2, -3, 1 ];
let x = -2;
let size = A.length;

if(checkPair(A,x,size)){
    console.log("Valid pair exists")
}else{
    console.log(`No valid pair exists for ${x}`)
}
