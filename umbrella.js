function minUmbrellas(weather) {
  if (weather.length % 2 != 0) return 0;
  let home = 0,
    office = 0;
  for (let i = 0; i < weather.length; i = i + 2) {
    let morning = weather[i];
    let evening = weather[i + 1];
    if (morning == "rainy" || morning == "thunderstorms") {
      home--;
      office++;
      if (home < 0) home = 0;
    }
    if (evening == "rainy" || evening == "thunderstorms") {
      home++;
      office--;
      if (office < 0) office = 0;
    }
  }
  return home + office;
}

let x = [
  "clear",
  "clear",
  "windy",
  "clear",
  "sunny",
  "clear",
  "clear",
  "sunny",
  "windy",
  "clear",
  "sunny",
  "sunny",
  "clear",
  "clear",
  "windy",
  "clear",
  "windy",
  "sunny",
  "clear",
  "windy",
  "windy",
  "rainy",
  "clear",
  "cloudy",
  "rainy",
  "cloudy",
  "windy",
  "sunny",
  "thunderstorms",
  "clear",
  "clear",
  "sunny",
  "windy",
  "clear",
  "sunny",
  "rainy",
  "clear",
  "windy",
  "thunderstorms",
  "clear",
  "clear",
  "cloudy",
  "windy",
  "sunny",
  "clear",
  "sunny",
  "cloudy",
  "clear",
  "clear",
  "windy",
  "clear",
  "clear",
  "sunny",
  "clear",
  "clear",
  "windy",
  "thunderstorms",
  "windy",
  "clear",
  "thunderstorms",
  "clear",
  "sunny",
  "clear",
  "windy",
  "clear",
  "sunny",
  "windy",
  "cloudy",
  "rainy",
  "cloudy",
  "sunny",
  "windy",
  "windy",
  "thunderstorms",
  "clear",
  "thunderstorms",
  "sunny",
  "sunny",
  "clear",
  "thunderstorms",
  "sunny",
  "clear",
  "windy",
  "sunny",
  "sunny",
  "clear",
  "windy",
  "cloudy",
  "windy",
  "windy",
  "windy",
  "sunny",
  "thunderstorms",
  "clear",
  "rainy",
  "sunny",
  "clear",
  "clear",
  "sunny",
  "clear",
];

let y = ["rainy", "rainy", "rainy", "rainy"];

console.log(minUmbrellas(y));
