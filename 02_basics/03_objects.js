//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sandy"
tinderUser.idLoggedIn = false 

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
        firstname: "sam",
        lastname: "sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {6: "e", 7: "f"}

 // const finalobj = {obj1, obj2}
 // console.log(finalobj);
 
// const finalobj = Object.assign({}, obj1, obj2, obj3)
// console.log(finalobj);

const finalobj = {...obj1, ...obj2, ...obj3}
// console.log(finalobj);

const users = [
    {
        id: "abc",
        email: "sam@gmail.com",
        idLoggedIn: true
    },
    {
        id: "abc",
        email: "sam@gmail.com",
        idLoggedIn: true
    },
    {
        id: "abc",
        email: "sam@gmail.com",
        idLoggedIn: true
    }
    
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor: "sam"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

 console.log(instructor);
 console.log(instructor);

 // this is for react
 /*
const nvbar = ({company}) =>  {

}
navbr(company = "hites")

*/


// {
//        "coursename": "js in hindi",
//        "price":"999",
//        "courseInstructor": "sam"
//}

[
    {},
    {},
    {}
]
