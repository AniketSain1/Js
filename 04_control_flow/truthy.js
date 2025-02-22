const userEmail = []

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
};

// falsy value
//false, 0, -0, null, undefined, "", NaN, BigInt 0n

// truthy values
// "0", 'false, " ", [], {}, function(){}

//if (userEmail.length === 0){
//console.log("Array is empty");
//}

const emptyobj = {}

if (Object.keys(emptyobj).length === 0){
    console.log("Object is empty");
}
// nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


