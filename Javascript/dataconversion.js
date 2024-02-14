let score = 33;
console.log(typeof score); // number
let sc = "33wees"; // null ->0  && undefines -> NaN && true->1 && false->0
console.log(typeof(sc)); // string


//data_type_Converison

let value = Number(sc);
console.log(typeof value); // number
console.log(value) // NaN not a number


let islog = 1; // 0->false
let bollog = Boolean(islog);
console.log(bollog)  // true

//""->false && "heloo"->true;


let sum = 33;
let stringsum = String(sum);
console.log(stringsum);
console.log(typeof stringsum)  // string