// WAP to convert temperatures to and from Celsius, Fahrenheit.

const oldC = Number(prompt("Enter the temperature in Celsius: "));
const oldF = Number(prompt("Enter the temperature in Fahrenheit"));
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

const newC = ((oldF-32)/9) * 5;
const newF = ((oldC/5)*9) + 32;

console.log("The new temperature in Celsius is", newC);
console.log("The new temperature in Fahrenheit is",newF);

