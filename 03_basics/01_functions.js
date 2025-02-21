function sayMyName(){
    console.log("A");
    console.log("n");
    console.log("i");
    console.log("k");
    console.log("e");
    console.log("t");
}

//sayMyName()

// function addTwoNumber(number1,number2){
//    console.log(number1 + number2);
      
//}
// const result = addTwoNumber(3, 5)

function addTwoNumber(number1, number2){
        //let result = number1 + number2
        //return result      
        return number1 + number2
        console.log("Aniket");  // will not execute anything after return
}

const result = addTwoNumber(3, 5)

//console.log("Result: ", result);

function loginUserMessage(username){
    //if(username === undefined){
    //    console.log("Please enter a username");
    //    return
    //}
    if(!username){
                console.log("Please enter a username");
                        return
                            }
    return `${username} just logged in`

}

function loginUserMessages(username = "sam"){
        if(!username){
            console.log("Please enter a username");
        }
            return `${username} just logged in`
}

// console.log(loginUserMessage("Aniket"));
//console.log(loginUserMessage());
//console.log(loginUserMessages());


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
//console.log(calculateCartPrice(200, 300, 400));

const user = {
    username: "Aniket",
    price: 99
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    return
}
// handleObject(user)
handleObject({
    username: "sandy",
    price: 99
})


const myNewArray = [200, 300, 400, 500 ]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400]));