//primitive//

//7 types : string, number, boolean, null, undefined, symbol, bigint


const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("456")
const anotherId = Symbol("456")

console.log(id === anotherId);

//const bigNumber = 3459865489356964286n

//reference (Non primitive)

//Arrays, functions, objects

const heros = ["AlluArjun", "Nani", "Nithin"]
let myObj = {
    name: "gayathri",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

//console.log(typeof bigNumber);
//console.log(typeof heros);
//console.log(typeof scoreValue);
//;'console.log(typeof outsideTemp);

console.log(typeof anotherId);

let myChannelname = "gayathrireddydotcom"

let anothername = myChannelname
anothername = "the buzz"

console.log(myChannelname);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "gayathri@gooogle.com"

console.log(userOne.email);
console.log(userTwo.email);