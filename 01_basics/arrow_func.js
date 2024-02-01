const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// in arrow function we cannot use this but in normal function
//  implicit return means return in one statement
