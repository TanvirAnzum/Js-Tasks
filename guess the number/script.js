let digit = prompt("Guess any number from 1-10: ");
let random_number = Math.ceil(Math.random() * 10);

if (isNaN(digit))
  alert(
    "Hei Idiot! Insert a Number. If you dont know about number. please check internet and try again!"
  );
else if (digit > 10 || digit <= 0)
  alert(
    "Hei Nerd! Insert a Number between 1 to 10! and take a glass for your eyes! Thank me later"
  );
else if (digit == random_number) alert("You are the Champion!");
else alert("Haha! I got u! Wrong Answer!");
