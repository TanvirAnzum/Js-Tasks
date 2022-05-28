///sample input: 123
///need to check if 1^3 + 2^3 + 3^3 == 123^3 ?


function cubic_sum(range) {
    let arr = new Array();
    for(let i=1;i<=range;i++) {
        if(is_matched(i)) arr.push(i);
    }
    return arr;
}

function is_matched(num) {
    let value = num ** 3;
    let sum = 0;
    while(num) {
        sum += (num%10)**3;
        num = parseInt(num/10);
    }
    if(sum == value) return true;
    else return false;
}

console.log(cubic_sum(1000));