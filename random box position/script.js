const box = document.querySelector(".main__box");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let x = get_random() + "px";
  let r = get_random() + "px";
  let z = "translate(" + x + "," + r + ")";
  box.style.transition = "transform 1s ease-in-out";
  box.style.transform = z;
  //   console.log(z);
});

function get_random() {
  return -300 + Math.floor(Math.random() * 600);
}
