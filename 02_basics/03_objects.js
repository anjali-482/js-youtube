//singleton- Object.create




const mySym = Symbol("key1")

//object literals
const JSuser = {
    name:"Anjali",
    "full name":"Anjali Singh",
    [mySym]: "mykey1",
    age: 22,
    location: "Delhi",
    email: "anjali04082@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}




//access email
// console.log(JSuser.email)
// console.log(JSuser["email"])
// console.log(JSuser["full name"])
// console.log(JSuser[mySym])

// change values
JSuser.email = "anjali040@gmail.com"

//to lock values
// Object.freeze(JSuser)

JSuser.email = "anjali567@microsoft.com"
// console.log(JSuser);

JSuser.greeting = function(){
    console.log("Hello JS user")
}

//obj ke andar name ko refernce kr rhe called string Interpolation

// this -> to reference same object,dot lgane se obj ke andar ki saari properties mil jaengi
JSuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

// console.log(JSuser.greeting);//return [Function (anonymous)] as a result fun execute nhi hua bs fn ka refernce aaya hai

console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());