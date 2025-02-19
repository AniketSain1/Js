let score = "33"
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);



//"33" => 33 (will conver easily)
//"33abc" => NaN or not a number
// true =>1; false => 0


let isLoggedIn = "yes"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0=> false 
// ""(empty string)=> false 
// "string"=> true

let someNumber = 33
let stringNumber = String(someNumber) 
//console.log(stringNumber);
//console.log(typeof stringNumber);


//*****************************Operations*********************************//

let value = 3
let negValue = -value
//console.log(negValue)

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2);
//console.log(2/2);
//console.log(2%2);

let str1 = "hello"
let str2 = " world"
let str3 = str1 + str2
//console.log(str3);  // hello world

//console.log("2" + 2); // 22
//console.log(2 + "2");// 22 
//console.log( "1" + 2 + 2);// 122
//console.log(1 + 2 + "2");//32 

//console.log(+true);  //1
//console.log(true+);// error

let num1,num2,num3
num1 = num2 = num3 = 2 + 2 ;

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

//https://tc39.es/ecma262/multipage/abstract-operations.html