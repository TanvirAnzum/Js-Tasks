let text = document.querySelector(".greetings");

console.log("sdas");

const d = new Date();

const hours = d.getHours();

console.log(hours);

if (hours >= 5 && hours < 12) text.textContent = "Good Morning!!";
else if (hours >= 12 && hours < 17) text.textContent = "Good Afternoon!!";
else text.textContent = "Good Evening!!";

console.log(text);
