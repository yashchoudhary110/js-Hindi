//  Immediately Invoked Function Expressions

(function chai(){
    console.log(`DB CONNECTED`);
})();

// ()()
// IIFE use to remove global scope pollution
// to stop invoke functionn in javascript we have to end that function to use another forther function by using ";"
// also support arrow function

( (name) => {
    console.log(`DB CONNECTED ${name}`);
})("yash")

// named IIFE and Simple IIFE
