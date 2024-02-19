//nested scope
function one(){
    const username ="Gourav"
 
    function two(){
        const website = "Youtube"
        console.log("Usernmae of one()-> ",username);
    }
    console.log("Webiste of two()-> ",website);
    two();
}
// one();

if(true){
    const user = "hari";
    if(user === "hari"){
        const web = "Youtube";
        // console.log(user + web);
    }
    // console.log(web)
}
// console.log(user);

console.log(adddone(3));

function adddone(num){
    return num + 1;
}

// console.log(addtwo(2));  can't run this 

//expression with function hosting
const addtwo = function(num){
    return num+2;
}
console.log(addtwo(11));  // it will run