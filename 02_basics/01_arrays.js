//arrays

const myArr = [0, 1, 2, 3, 4]
const myHeros = ["Shaktiman", "Nagaraj", "BenTen"]

const myArr2 =new Array(1, 2, 3, 4)
//console.log(myArr[1]); //1

// Array meathods
//myArr.push(5)
//myArr.push(6) //push the value to the array at last index
//myArr.pop() // remove the last value of array

//myArr.unshift(0) // will add 0 to the first place 
//myArr.shift() // remove first value form array
//myArr.shift()
//console.log(myArr.includes(9)); // false
//console.log(myArr.indexOf(3)); //3 gives index value of 3 in array

const newArr = myArr.join()

//console.log(newArr);
//console.log(myArr);
//console.log(typeof myArr); //object



// Slice and splice

//console.log("A ", myArr);
const myn1 =myArr.slice(1,3) // original array will remain same
//console.log(myn1);
//console.log("B ", myArr);

//const myn2 =myArr.splice(1,3) // will remove form the original array
//console.log(myn2);
//console.log("c ", myArr);

// array part 2
const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Batman", "Superman", "Flash"]

marvel_heros.push(dc_heros)
//console.log(marvel_heros); //[ 'Thor', 'Ironman', 'Spiderman', [ 'Batman', 'Superman', 'Flash' ] ]  :-will take dc_heroes as array in marvel_heros array.

//console.log(marvel_heros[3][1]);


const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros);

const real_another_array = all_new_heros.flat(1) // can give infinity if don't know depth
//console.log(real_another_array);


console.log(Array.isArray("Aniket")); //checking if Aniket is array or not
console.log(Array.from("Aniket")); //creating a new array 
console.log(Array.from({name: "Aniket"})); //will return empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // create a array of score1, score2, score3 
// [ 100, 200, 300 ] output
