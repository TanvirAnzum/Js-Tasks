///a function to check if the number is perfect or not


function is_perfect(num) {
    let sum = 1;

    for(let i=2; i*i<=num;i++) {
        if(num%i==0) {
            if(i*i!=num) {
                sum += i + parseInt(num/i);
            }
            else sum += i;
        }
    }
    // console.log(sum);
    if(sum==num && num!=1) return true;
    else return false;
} 


///printing perfect numbers between 1 to 10000;

console.log(is_perfect(6));
console.log(is_perfect(100));
console.log(is_perfect(28));
console.log(is_perfect(496));
console.log(is_perfect(8128));