// How to create an empty array in Javascript?

const arr = [2,3,4,5,6];

console.log(arr)


// How to access the first and last element in Javascript

const firstElement = arr[2];
const arrlength = arr.length;
const lastElement = arr[arrlength-1]
console.log(firstElement);
console.log(arrlength);
console.log(lastElement )

//----How do you remove the last element from an array?

const lastElement1 = arr.pop(); // THe Time Complexity will be O(1)
console.log(arr, lastElement1)

//----How do you add element in an array

arr.push(100); // The Time Complexity will be O(1)
console.log(arr)

//--How to add element on the first index

arr.unshift(300); // The Time Complexity will be O(N)
console.log(arr);

//---How to delete first elemet

arr.shift(); // The Time Complexity will be O(N)
console.log(arr)


//-----How to Loop the Array

let arrayy = [23,3,45,56,76,64,432,1324];

for (let i=0; i< arrayy.length; i++){
    console.log(arrayy[i]);

}
