// for loop

for(let i = 1;i<=10;i++){
    if(i%2==0){
        console.log(i,"Even");
    }
    else{
        console.log(i,"Odd");
    }
    // console.log(i);
}


//break and continue

for (let index = 0; index <=20; index++) {
    if(index == 5){
        console.log(`dectect 5`);
        continue;
    }
    console.log(`value of i is ${index}`)
    
}