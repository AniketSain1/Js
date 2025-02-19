const accountId = 112233
let accountEmail = "Aniket@gmail.com"
var accountPassword = "12345"
accountCity = "bangalore"
let accountState;
/* 
Prefer not to use var
because of issue in block scope and Functional scope
*/
//accountId = 2 // not allowed

accountEmail = "an@bm.com"
accountPassword = "112233"
accountCity = "bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])