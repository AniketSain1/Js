const score = 100
//console.log(score); //100

const balance = new Number(100)

//console.log(Number); //[Function: Number]
//console.log(balance); //[Number: 100]

//console.log(balance.toString().length); //3
//console.log(balance.toFixed(2)); //100.00

const otherNumber = 23.56479

//console.log(otherNumber.toPrecision(3));//23.6


const hunders = 10000000
//console.log(hunders.toLocaleString('en-IN')); //1,00,00,000


//++++++++++++++++++++  Math  ++++++++++++++++++++++++++++++++++++++++

//console.log(Math);
//console.log(Math.abs(-3)); //3
//console.log(Math.round(3.69)); //4
//console.log(Math.ceil(3.65)); //4
//console.log(Math.floor(3.48)); //3
//console.log(Math.min(1,2,3,4,5,6,7,8,9)); //1
//console.log(Math.max(1,2,3,4,5,6,7,8,9)); //9

//console.log(Math.random()); //0.9872842860732385 it will give random number between 0 to 1
console.log(Math.random()*10 +1); //7.434225261631584
console.log((Math.random()*10) +1); //2.4690453583465635

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1) + min)); //17
