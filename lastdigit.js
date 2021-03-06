var lastDigit = function (str1, str2) {
  let dig = Number(str1[str1.length - 1]);
  let pow;
  if (str2.length == 1) {
    pow = Number(str2[str2.length - 1]);
    if (pow == 0) return 1;
  } else {
    let x = str2[str2.length - 2] + str2[str2.length - 1];
    pow = Number(x);
  }
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

console.log(lastDigit("10", "10000000000"));

console.log(
  lastDigit(
    "3715290469715693021198967285016729344580685479654510946723",
    "68819615221552997273737174557165657483427362207517952651"
  )
);
