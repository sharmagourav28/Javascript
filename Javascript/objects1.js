//singleton  constructor se singleton banegaa

// objects literalss
// Object.create  singleton
const JsUsers = {    //key and values
    name:"Hitesh",
    "fullname":"Gourav Sharma",
    // [sym]:"Symbol",
    age : 18,
    location:"Jaipur",
    email:"hitesh@gmail.com",
    loggin:false,
    lastlog :['Mon',"tue"]
}

// console.log(JsUsers.email);
// console.log(JsUsers["fullname"])
// // console.log(JsUsers[sym]);

// JsUsers.email = "Hello@gmail.com";
// // Object.freeze(JsUsers)
// console.log(JsUsers)


JsUsers.greeting = function(){
    console.log(`Hello Js uses, ${this.name}`)
}
console.log(JsUsers.greeting())