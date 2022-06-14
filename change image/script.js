const main = document.querySelector(".main");
const img = document.querySelector(".img");
const btn = document.querySelectorAll(".btn");

// console.log(btn);

btn[0].addEventListener("click", () => {
  img.src = "./images/lm.jpeg";
  main.style.background = "url('./images/lm.jpeg') no-repeat center";
  main.style.backgroundSize = "cover";
  img.title = "Lionel Messi";
});

btn[1].addEventListener("click", () => {
  img.src = "./images/cr.jpg";
  main.style.background = "url('./images/cr.jpg') no-repeat center";
  main.style.backgroundSize = "cover";
  img.title = "Cristiano Ronaldo";
});
