// primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 325465654654654655n

// Reference Type (non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "anjali",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof bigNumber);

console.log(typeof outsideTemp); //ye to null hai pr o/p me object aaya bcz 


console.log(typeof heros)

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ***********************************************


// Stack memory(Primitive), Heap (Non-Primitive)


let myYoutubename = "anjalidotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email =  "anjali@google.com"

console.log(userOne.email);
console.log(userTwo.email);
