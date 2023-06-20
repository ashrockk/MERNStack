// Objects

const person ={
    firstName :"John",
    lastName :"Doe",
    fullName: () => {
        return `${person.firstName} ${person.lastName}`;
    },
};

const c = person.firstName;
const a = person.fullName();
console.log(c,a);

//Arrays

const arr =["Saab", "Volvo" , "BMW", {name:"alto"}];

// access the first item
const b = arr[0];
console.log(b);

// accessing the last item instead.
const e = arr[arr.length-1]; 
console.log(e);


// add an item to the end of an array

console.log(arr.length);


//What's the difference between array and objects fundamentally?
// answer: Index ley define garcha. 

