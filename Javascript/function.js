function saymyname(){
    console.log("My name is gourav");
}
saymyname // refernce
// saymyname(); //exectuion

// function addnum(num1,num2){ //parameter
//     console.log(`the sum of num1 and num2 is ${num1+num2}`);
    
// }
// const res = addnum(2,3);//agruments
// console.log("res : " ,res);

function addnum(num1,num2){ //parameter
    // let res = num1+ num2;
    return num1+num2
    
}

const res = addnum(2,3);//agruments
// console.log("res : " ,res);

function loginmsg(usrname){
    if(usrname === undefined){  //(!username)
        console.log("Enter name first");
        return 
    }
    return `${usrname} just log in`
}
const name = loginmsg('Hleo');
console.log(name);