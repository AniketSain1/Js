//console.log(2 > 2)  // false
//console.log(2 >= 2) // true
//console.log(2 < 2)  // false
//console.log(2 <= 2) // true
//console.log(2 != 2) // false

//console.log("2" > 1); // true
//console.log("02" > 1); // true


/* the reason is that an equality check == and comparisons ><>=<= work differently 
Comparisons convert null to a number, treating it as 0.
that's why null >= 0 is true and null == 0 is false */

//console.log(null > 0); // false
//console.log(null == 0); // false
//console.log(null >= 0); // true


//console.log(undefined == 0); //false
//console.log(undefined > 0); //false
//console.log(undefined < 0); //false

/* === strict check it will check data type also */

console.log("2" === 2); // false