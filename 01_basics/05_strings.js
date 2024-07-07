const name = "anjali"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} ans my repo count is 
    ${repoCount}`);

const gameName = new String('anjali-hs-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0,4) 
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  anjali  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://anjali.com/anjali%20singh"

console.log(url.replace('%20', '-'));

console.log(url.includes('anjali'))

console.log(gameName.split('-'))