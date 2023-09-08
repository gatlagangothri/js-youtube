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

console.log(typeof heros);

