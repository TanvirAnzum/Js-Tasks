/// fibonacci series -> 0 1 1 2 3 5 8 13 21 . . . .

let a = 0;
let b = 1;
let range = 10;
for (let i = 0; i <= range; i++) {
  if (i == 0) console.log(a);
  else if (i == 1) console.log(b);
  else {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
  }
}
