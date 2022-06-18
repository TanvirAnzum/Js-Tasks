function lastDigit(as) {
  for (let i = as.length - 2; i > 0; i--) {
    let a = as[i + 1];
    let b = as[i];
    let x = a % 10;
    let y = b % 100;
    as[i] = Math.pow(y, x);
  }
  return as;
}

function calculate(a, b) {
  let ans = result(a, b);
  return ans;
}

function result(dig, pow) {
  if (pow == 0) return 1;
  if (dig == 0) {
    if (pow == 0) return 1;
    else return 0;
  } else if (dig == 1) return 1;
  else if (dig == 2) return two(pow);
  else if (dig == 3) return three(pow);
  else if (dig == 4) return two(2 * pow);
  else if (dig == 5) return 5;
  else if (dig == 6) return 6;
  else if (dig == 7) return seven(pow);
  else if (dig == 8) return two(3 * pow);
  else if (dig == 9) return three(2 * pow);
}

function two(pow) {
  if (pow % 4 == 1) return 2;
  else if (pow % 4 == 2) return 4;
  else if (pow % 4 == 3) return 8;
  else return 6;
}

function three(pow) {
  if (pow % 4 == 1) return 3;
  else if (pow % 4 == 2) return 9;
  else if (pow % 4 == 3) return 7;
  else return 1;
}

function seven(pow) {
  if (pow % 4 == 1) return 7;
  else if (pow % 4 == 2) return 9;
  else if (pow % 4 == 3) return 3;
  else return 1;
}

console.log(lastDigit([123232, 694022, 140249]));
