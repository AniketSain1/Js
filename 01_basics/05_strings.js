const name ="Aniket"
const repoCount= 50

//console.log(name + repoCount + "Value");;

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName =new String('Devil')
//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());

//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('v'));


const newString = gameName.substring(0,4)
//console.log(newString);

//const anotherString = gameName.slice(0,4)
const anotherString = gameName.slice(-8,2)
console.log(anotherString);

const newStringOne = "   Aniket   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "hTTP://Aniket.com/Aniket%20Saini"

console.log(url.replace('%20','_'));
console.log(url.includes('Aniket'));
console.log(url.split('/'));


