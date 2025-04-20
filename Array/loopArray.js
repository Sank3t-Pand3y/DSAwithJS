// Question 1 : How do you check if an element exists in an array or Not?

let arr = [12,21,23,32,43,34,"Mate"];

const findElement = (arr, target)=>{
    for (let x of arr){
        if(x === target){
            return true;
        }
    }
    return false;
}

console.log(findElement(arr, "Mate"));
console.log(findElement(arr, "Hello"));