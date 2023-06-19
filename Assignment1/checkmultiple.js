// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

const a = Number(prompt("Give an integer of your choice: "));

if(a%3==0 && a%7==0)
console.log("A is the multiple of 3 and 7.")
else if (a % 3 == 0 )
console.log("A is the multiple of 3");
else if(a % 7 == 0)
console.log("A is the multiple of 7");
else
console.log("A is not the multiple of any.");


