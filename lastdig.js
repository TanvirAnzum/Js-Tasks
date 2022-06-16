function lastDigit(as) {
  let temp;
  for (let i = as.length - 1; i >= 0; i--) {
    let a = as[i];
    let b = as[i - 1];
    if (temp == undefined) {
    }
    if (a == 0) temp = 1;
    else temp = ld(b, a);
  }
}

function single(x) {
  return x % 10;
}

var ld = function (b, a) {
  let dig = b % 10;
  let pow = a % 4;
  return result(dig, pow);
};

// 0 1 2 3 4 5 6 7 8 9

function result(dig, pow) {
  if (dig == 0) return 0;
  else if (dig == 1) return 1;
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
