/// a program to generate prime numbers or check if the number is prime or not 
/// I am using sieve algorithm to generate prime numbers
/// let say the highest range of prime numbers is 1000

let range = 1000;
let isprime = new Array(range+1).fill(true);

for(let i=2; i*i <= range;i++) {
    
    if(isprime[i]) {
        for(let j = 2 * i; j<=range; j +=i) {
            isprime[j] = false;
        }
    }
}

///printing the prime numbers between 1 to 1000

for(let i=2;i<=range;i++) {
    if(isprime[i]) console.log(i);
}

