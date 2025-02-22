//for of
const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
 //   console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
//    console.log(`Each char of greetings is ${greet}`);
}

// Maps

const map = new Map()
map.set('In', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('In', "India")

// console.log(map);

for (const [key, value] of map) {
    //console.log(key, ":-", value);
 }

// const myObject = {
//    game1: 'NFS',
//    game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//        console.log(key, ":-", value);
//         }

const myObject = {
        js: 'javascript',
        cpp: 'C++',
        rb: 'rubby',
        swift: "swift by apple"
 }
for (const key in myObject) {
//      console.log(`${key} shortcut is for ${myObject[key]}`);
 }

 const programming = ["js","rb", "py", "cpp"]

 for(const key in programming){
 //   console.log(programming[key]);
 }

 // const map = new Map()
 // map.set('IN', "India")
 // map.set('USA', "United States of America")
 // map.set('Fr', "France")
 // map.set('IN', "India")

 // for (const key in map) {
 //     console.log(key);
 // }

// for each
const coding = ["js", "py", "ruby", "python", "cpp", "java"]

//coding.forEach( function (val){
//    console.log(val);
// })
//coding.forEach( (Item) => {
//    console.log(Item);
    
//})

//function printMe(item){
//    console.log(item);
//}

//coding.forEach(printMe)

//coding.forEach( (item, index, arr) => {
//    console.log(item,index, arr);
//})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "java"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }, 
    {
        languageName: "python",
        languageFileName: "py"
    },
 ]

 myCoding.forEach( (item) => {
     console.log(item.languageName);
 })