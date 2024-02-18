let d = new Date();
console.log(d.toDateString());
console.log(d.toISOString());
console.log(d.toLocaleDateString());
console.log(typeof d);

// yy - mm -- dd    hr--min --sec
let mydate = new Date(2023,0,23);
let y = new Date(2023,0,23,5,22,32);
let s = new Date("2023-01-23")
console.log(mydate.toDateString());

let t = Date.now();
console.log(t); // msec

console.log(s.getTime());

console.log( Math.floor(Date.now()/1000));


let newd = new Date();
console.log(newd);
console.log(newd.getMonth()); //getday