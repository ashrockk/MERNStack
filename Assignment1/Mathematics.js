// Write a JavaScript program to calculate multiplication and division of two numbers.

const  a = Number(prompt("Enter a value of the first integer: "));
const  b = Number(prompt("Enter the value of second integer: "));

function calculation(a,b)
{
    c = a*b;
    console.log("The multiplication of two numbers is:", c);
    d = a/b;
    console.log("The division of two numbers is:", d);
}

const e = calculation(a,b);