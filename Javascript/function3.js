// immediately invoked function expresion (IIFE);


(function chai (){
    console.log(`DB Connneted`);
})();
//iife funciton end karna hoga with semicolon


( (name) =>{
    console.log("hello ",name)
})('gour');