// Objects

const person ={
    firstName :"John",
    lastName :"Doe",
    fullName: () => {
        return `${person.firstName} ${person.lastName}`;
    },
};

const c = person.firstName;
const a = person.lastName;
console.log(c,a);