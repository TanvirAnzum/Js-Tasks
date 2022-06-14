const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n == 0 || n == 1) return n;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(20));
console.log(fib(30));
console.log(fib(50));
