let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let persons = document.querySelectorAll(".person");
let result = document.querySelector(".result");

btn.addEventListener("click", () => {
  let random = 30 + Math.floor(Math.random() * 70);
  if (persons[0].value == "" || persons[1].value == "") {
    result.innerText = "You must fill the form to get output!";
    result.style.color = "red";
  } else {
    result.style.color = "black";
    if (random > 80)
      result.innerText = "WOW " + random + "% ! You Are A True Loverr!!";
    else if (random > 70)
      result.innerText = "Great, " + random + "% ! Keep Loving!!";
    else if (random > 50)
      result.innerText =
        "Good, " + random + "% ! Neither a true lover nor a hater !!";
    else
      result.innerText = "Alas, " + random + "% ! What kind of love is this!!";
  }
});
