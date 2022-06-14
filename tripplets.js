var recoverSecret = function (triplets) {
  let set = new Set();
  for (let i = 0; i < triplets.length; i++) {
    for (let j = 0; j < 3; j++) set.add(triplets[i][j]);
  }
  let arr = Array.from(set);
  let a = triplets.length;
  while (a--) {
    for (let i = 0; i < triplets.length; i++) {
      for (let j = 0; j < 2; j++) {
        if (j == 0) {
          let x = triplets[i][j];
          let y = triplets[i][j + 1];
          if (arr.indexOf(x) > arr.indexOf(y)) arr = swap(arr, x, y);
        } else if (j == 1) {
          let x = triplets[i][j];
          let y = triplets[i][j + 1];
          let z = triplets[i][j - 1];
          if (arr.indexOf(x) > arr.indexOf(y)) arr = swap(arr, x, y);
          if (arr.indexOf(z) > arr.indexOf(x)) arr = swap(arr, z, y);
        }
      }
    }
  }

  return arr.join("");
};

function swap(arr, key, next) {
  arr.splice(arr.indexOf(key), 1);
  if (arr.indexOf(next) > 0) arr.splice(arr.indexOf(next) - 1, 0, key);
  else arr.unshift(key);
  return arr;
}

triplets1 = [
  ["t", "u", "p"],
  ["w", "h", "i"],
  ["t", "s", "u"],
  ["a", "t", "s"],
  ["h", "a", "p"],
  ["t", "i", "s"],
];

console.log(recoverSecret(triplets1));
