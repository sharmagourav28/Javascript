//singleton objects
const tinderuser = new Object(); // singleton object

// const tinderuser ={}  non singleton object

tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.login = false
// console.log(tinderuser);

const regular = {
    email : "some@gmail.com",
    fulname:{
        username :{
            firstname : "Hitesh",
            lastname : "Sharma"
        }
    }
}
// console.log(regular.fulname.username.firstname);

const obj1 = {1:"A",2:"B"};
const obj2 = {3:"a",4:"b"};
// const obj3 = {obj1 ,obj2};
//merge 2 objects
// const obj3 = Object.assign({},obj1,obj2);

const obj33 = {...obj1,...obj2};

console.log(obj33);



//databse se ayga

const user = [
    {
        id:1,
        email:"gouravsharma@gmail.com",
    },
    {
        id:1,
        email:"gouravsharma@gmail.com",
    },
    {
        id:1,
        email:"gouravsharma@gmail.com",
    }
]
user[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('login'));