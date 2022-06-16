snail = function (array) {
  let n = array.length;
  if (n == 1) return [];
  console.log(n);
  let output = [];
  let dir = 0;
  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1;
  while (left <= right && top <= bottom) {
    if (dir == 0) {
      for (let i = left; i <= right; i++) {
        output.push(array[top][i]);
      }
      top++;
    } else if (dir == 1) {
      for (let i = top; i <= bottom; i++) {
        output.push(array[i][right]);
      }
      right--;
    } else if (dir == 2) {
      for (let i = right; i >= left; i--) {
        output.push(array[bottom][i]);
      }
      bottom--;
    } else if (dir == 3) {
      for (let i = bottom; i >= top; i--) {
        output.push(array[i][left]);
      }
      left++;
    }
    dir = (dir + 1) % 4;
  }
  return output;
};

console.log(snail([[]]));
console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);
