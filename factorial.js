/// factorial : 5! = 1 * 2 * 3 * 4 * 5

///factorial with recurssion
function fact(n) {
    if(n==0) return 1;
    return n * fact(n-1);
}

///factorial with loops

function factorial(n) {
    let result = 1;
    while(n) {
        result *= n--;
    }
    return result;
}

console.log(fact(6));
console.log(factorial(7));