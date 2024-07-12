// u can refer to date object in mdn docs


// Dates 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());


// let myCreatedDate = new Date(2024, 0, 24 )
// let myCreatedDate = new Date(2024, 0, 24, 5, 3)
// let myCreatedDate = new Date("2024-08-04")
let myCreatedDate = new Date("01-24-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default',{
    weekday: "long"
})