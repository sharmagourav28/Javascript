const my = ["thor","ironman","spider"]
const dc = ["flash","batmab","supna"]


// my.push(dc);
// console.log(my) // array inside array
// console.log(my[3]) 

// my.concat(dc);
// console.log(my);  // same as above

const all = my.concat(dc);
console.log(all);

const allnew = [...my,...dc]
console.log(allnew);

const ath = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real = ath.flat(Infinity);
console.log(real)


console.log(Array.isArray("gourav"));
console.log(Array.from("Gourav"))
console.log(Array.from({name:"Gourav"}))

let sc = 100;
let sc2 = 200;
console.log(Array.of(sc,sc2));