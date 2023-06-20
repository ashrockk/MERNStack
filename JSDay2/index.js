/*// Objects

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
// console.log(b);

// accessing the last item instead.
const e = arr[arr.length-1]; 
// console.log(e);


// add an item to the end of an array

console.log(arr.length);
console.log(arr.sort());
console.log(arr.push("test"));
console.log(arr.pop());


 linking arrays chahi chutyo
// ES5

cars.forEach(myFunction);

//ES6

cars.map(d => console.log(d));


*/



//user model
const user ={

    firstName: "John",
    lastName: "Doe",
    email: "john@john.com",
    password:"123",
    phone:"918312",
};

//user list

const{ password, phone, ...rest } = user;
console.log({rest});













