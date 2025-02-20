// Dates

let myDate = new Date()
//console.log(myDate);  //2025-02-20T07:24:43.956Z
//console.log(myDate.toString()); //Thu Feb 20 2025 07:25:59 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toLocaleDateString()); //2/20/2025
//console.log(myDate.toISOString()); //2025-02-20T07:28:07.028Z
//console.log(myDate.toDateString()); //Thu Feb 20 2025
//console.log(myDate.toLocaleString()); //2/20/2025, 7:28:07 AM
//console.log(typeof myDate); //Object

///let myCreatedDate = new Date(2023, 0, 23)
//console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023

//let myCreatedDate = new Date(2023, 0, 23, 5, 4)
//console.log(myCreatedDate.toLocaleString()); //1/23/2023, 5:04:00 AM.

let myCreatedDate = new Date("2023-01-23")
//console.log(myCreatedDate.toLocaleString()); //1/23/2023, 12:00:00 AM

let myTimeStamp = Date.now()

//console.log(myTimeStamp); //1740037261531
//console.log(myCreatedDate.getTime()); //1674432000000
//console.log(Math.floor(Date.now()/1000)); //1740037261

let newDate =new Date()
console.log(newDate); //2025-02-20T07:43:56.391Z
console.log(newDate.getDay()); // 4
console.log(newDate.getMonth()+1); // 2


// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
        
        })
