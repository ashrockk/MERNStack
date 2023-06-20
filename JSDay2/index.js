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

//Destructuring objects.

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

// const{a, ...others} = {a:1, b:2, c:3};
// console.log(others); //{b:2, c:3}

// const[first, ...others2] = [1,2,3];
// console.log(others2);


const arra = ["saab" , "volvo" , "bmw"];
const[first, ...other] = arra;
console.log(other);


/* JS good practices

1. Avoid Global Variables
2. Always declare Local Variables
3. Declarations on top
4. Initialize Variables
5. Declare objects with const
6. Declare arrays wth const
7. Use === Conparision
8. Use Parameter Defaults while using functions
*/









