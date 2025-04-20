// Question 1 : Sum of all natural numbers from 1 to n

// sum of 1 to 5: 15

function sumofNaturalNum(num){
    let sum = 0;
    for(let i=1;i<=num;i++){
        sum += i;
    }
    return sum;
}
console.log(sumofNaturalNum(5));


//-------(Q2) Palindrome Number
function PalindromeNumber(num){
    let copynum = num , reverseNumber =0;
    while(copynum>0){
        const lastdigit = copynum%10;
        reverseNumber = reverseNumber*10 + lastdigit;
        copynum = Math.floor(copynum/10)
    }
    return num === reverseNumber;
}
console.log(PalindromeNumber(121))


//------(Q3). Fibonacci Number :

function fib(num){
    if(num < 2){
        return num;
    }

    let prev = 0, curr = 1, next;
    for(let i = 2; i<=num; i++){
        next = prev + curr;
        prev = curr;
        curr = next;
    }
    return next;
}

console.log(fib(4))  

//------Missing Number

function miss(num){
    let sum = 0;
    for(let i=0; i<num.length; i++){
        sum = sum + num[i];
    }
    return num.length*(num.length+1)/2 - sum;
}

console.log(miss([3,0,1]))