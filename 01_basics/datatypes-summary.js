// Primitive datatype

// 7 type : String, Number, Booleon, null, undefined, symbol, Bigint

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const bigNumber = 326487985145851n

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);



// Reference (Non primitive)
// array, Object, Function


const heros = ["Shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Aniket",
    age: 25,
}

const myFunction = function(){
    console.log("Hello world");
}


/* typeof Operator Result
undefined - "undefined"
Null      - "Object"
Boolean   - "Boolean"
Number    - "Number"
String    -  "String"
Object    - "Object"  (where native and does not implement[[Call]])
Object    - "Function"  (where native or host and does implement[[Call]])
Object (host and does not implement [[Call]]) -  Implementation-defined except may not be 
                                                 "undefined", "boolean", "number", or "string".
*/


/////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Two types of memory 
//  Stack (Primitive), and Heap (Non Primitive)

let myName = "Aniket"
let anotherName = "Saini"
anotherName = "shiva"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "userone@gmail.com",
    upi: "user1@ybl"
}

let userTwo = userOne

userTwo.email = "usertwo@gmail"

console.log(userOne);
console.log(userTwo);