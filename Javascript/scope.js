


// var c = 10110;
{ }//scope with function and loop  global scope 
let a = 22;
if (true) {
    let a = 100;
    console.log(`a value ${a}`)
    const b = 200;
    var c = 300; // local scope
}
console.log("global ", a);
// console.log(b);
console.log(c); // it will run outside the loop