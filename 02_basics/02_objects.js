const mySym = Symbol("key1")

// object creation

const seq = {
    name : "Yash",
    age : 22,
    full_name : "Yash Choudhary",
    location : "Trichy",
    [mySym] : "key1"
}

console.log(seq[mySym])

// JsUser

seq.greetings = function(){
    console.log("Hello js user")
}

seq.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
}
console.log(seq.greetings())

console.log(seq.greetingTwo())

// this below is a singleton object
// const tinderUser = new Object()

const tinderuser = {}

tinderuser.id = "123"
tinderuser.name = "Yash"
tinderuser.isLoggedIn = false

// console.log(tinderuser)

const regularUser = {
    email : "yash@gmail.com",
    fullname:{
        userfullname:{
            firstname : "Yash",
            lastname:"Choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1:"a",2:"b"}
const obj2 = {
    3:"c",4:"d"
}
const obj3 = {5:"e",6:"f"}

// const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4)

// same as array
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4)

const users = [ 
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email)


console.log(Object.entries(tinderuser));

