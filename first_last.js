///summation of first and last of an integer
///sample input: 453456 output: 10

function sum(num) {
    let last_digit = num%10;
    let first_digit = first(num);
    return first_digit + last_digit;
}

function first(num) {
    let str = num.toString();
    return Number(str[0]);
}

console.log(sum(2345556));
console.log(sum(96565));
console.log(sum(542121));