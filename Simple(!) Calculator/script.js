const n1 = document.querySelector("#num-1");
const n2 = document.querySelector("#num-2");
const res = document.querySelector(".result");
const btns = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const tt = document.querySelector(".content-title-t");
const tb = document.querySelector(".content-title-b");
const mt = document.querySelector(".content-val-t");
const mb = document.querySelector(".content-val-b");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    if (!unsafe()) {
      res.style.color = "black";
      res.textContent = "Result: ";
      if (btns[i].value == 0) return calc(Number(n1.value) + Number(n2.value));
      else if (btns[i].value == 1)
        return calc(Number(n1.value) - Number(n2.value));
      else if (btns[i].value == 2)
        return calc(Number(n1.value) * Number(n2.value));
      else if (btns[i].value == 3)
        return calc(Number(n1.value) / Number(n2.value));
      else if (btns[i].value == 4)
        return percentage(Number(n1.value), Number(n2.value));
      else if (btns[i].value == 5)
        return calc(gcd(Number(n1.value), Number(n2.value)));
      else if (btns[i].value == 6)
        return calc(lcm(Number(n1.value), Number(n2.value)));
      else if (btns[i].value == 7) {
        modal.style.display = "flex";
        modal_print(Number(n1.value), mt, tt);
        modal_print(Number(n2.value), mb, tb);
      } else {
        res.style.color = "black";
        res.innerHTML = `Result: <span class='per-1'>${n1.value} is ${isPrime(
          Number(n1.value)
        )}</span><span class='per-2'>${n2.value} is ${isPrime(
          Number(n2.value)
        )}</span>`;
      }
    }
  });
}

function unsafe() {
  if (
    Number(n1.value) >= Number.MAX_SAFE_INTEGER ||
    Number(n2.value) >= Number.MAX_SAFE_INTEGER ||
    Number(n1.value) <= Number.MIN_SAFE_INTEGER ||
    Number(n2.value) <= Number.MIN_SAFE_INTEGER
  ) {
    res.style.color = "#FF4F5B";
    res.style.textAlign = "center";
    res.textContent = " Safe integer limit exceeded!";
    return true;
  }
  if (n1.value == "" || n2.value == "") {
    res.style.color = "#FF4F5B";
    res.textContent = "Both fields must be filled.";
    return true;
  }
  return false;
}

function calc(s) {
  if (s >= Math.MAX_SAFE_INTEGER || s <= Math.MIN_SAFE_INTEGER) {
    res.style.color = "#FF4F5B";
    res.style.textAlign = "center";
    res.textContent = " Safe integer limit exceeded!";
  } else {
    res.style.color = "black";
    res.textContent = "Result: " + s;
  }
}

function percentage(a, b) {
  let x = (a / b) * 100;
  res.innerHTML =
    "Result: <span class='per-1'>" +
    a +
    " is " +
    x.toPrecision(4) +
    "% of " +
    b +
    ".</span>";
  let y = (b / a) * 100;
  res.innerHTML +=
    "<span class='per-2'>" +
    b +
    " is " +
    y.toPrecision(4) +
    "% of " +
    a +
    ".</span>";
}

function gcd(a, b) {
  if (a == 0) return b;
  return gcd(b % a, a);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function divisor(num) {
  let arr = new Array();
  for (let i = 1; i * i <= num; i++) {
    if (num % i == 0) {
      if (i * i != num) {
        arr.push(i);
        arr.push(parseInt(num / i));
      } else {
        arr.push(i);
      }
    }
  }
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr;
}

///for modal

close.addEventListener("click", () => {
  modal.style.display = "none";
});

function modal_print(num, y, z) {
  z.textContent = "Divisor Of " + num + " :";
  y.textContent = "";
  let x = divisor(num);
  for (let i = 0; i < x.length; i++) {
    if (i == x.length - 1) y.textContent += x[i];
    else y.textContent += x[i] + ", ";
  }
}

//prime test

function isPrime(num) {
  if (num == 2 || num == 3) return "prime.";
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) return "not prime.";
  for (let i = 5; i * i <= num; i += 6)
    if (num % i == 0 || num % (i + 2) == 0) return "prime.";
  return "prime.";
}
