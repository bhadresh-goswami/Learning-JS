console.log("hello");
//function without argument

const fact = (n) => {
    if(n<0) return ;
    if(n===1) return 1;
    return n * fact(n-1);
}

console.log(`factorial of 5 is ${fact(5)}`);

//callback function
const callMe = (callback) => {
    console.log(callback);    
}

callMe(fact(4));
