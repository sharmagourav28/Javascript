//Arrow Function 
// this --> current contest k barra m

const user = {
    usrname :"Gourav",
    price : 499,

    welcomemsg : function(){
        console.log(`${this.usrname},welcome to  website`)
        console.log(this)  // show user data
    }
}

// user.welcomemsg()
// user.usrname = "sam";
// user.welcomemsg()
// console.log(this) empty 



// function chai(){
//     console.log(this)
// }
// chai();



const chai = () =>{
    console.log(this);
}
// chai();


//explitct return
const addtwo = (num1,num2) =>{
    return num2+num2;
}
console.log(addtwo(23,2));

//implesite return for one line
const at = (num1,num2) => num1+num2;
// same above and below only syntax
const tt = (n1,n1) => (n1+n2);