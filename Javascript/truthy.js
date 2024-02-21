const useremail = "abc@gmail.com"
if(useremail){
    console.log("Found It");
}
else{
    console.log("else here")
}


// falsey value
//         false,o,-0,bigint 0n,empty String "",null,undefined,Nan

// truthy val
    // "0","false"," ",[],{},function(){} 


    // logical operator  && || ??
        //  ?? nUllish coalescing operator(??) : null undefined



let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 15;

val1 = null?? 10 ??20;


///ternary operator

conditon ? true : false

