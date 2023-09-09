const name = "gayathri"
const repoCount = 45

//console.log(name + repoCount + "Value");

console.log(`my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('gayathrigr')

console.log(gameName[3])
console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());

//console.log(gameName.charAt(8));
//console.log(gameName.indexOf("a"));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-2,4)
console.log(anotherString);

const newStringOne = "   gayathri   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://gayathri.com/gayathri%40reddy"

console.log(url.replace('%40', '-'));

console.log(url.includes('gayathri'));

console.log(gameName.split('-'));