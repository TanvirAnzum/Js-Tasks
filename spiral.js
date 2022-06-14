function spiralize(n) {
  let arr = Array(n)
    .fill(null)
    .map(() => Array(n));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) arr[i][j] = 0;
  }

  let count = 0;
  let dir = 0;
  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1;
  while (left <= right && top <= bottom) {
    if (dir == 0) {
      for (let i = left; i <= right; i++) {
        arr[top][i] = 1;
      }
      top++;
    } else if (dir == 1) {
      for (let i = top; i <= bottom; i++) {
        arr[i][right] = 1;
      }
      right--;
    } else if (dir == 2) {
      for (let i = right; i >= left; i--) {
        arr[bottom][i] = 1;
      }
      bottom--;
    } else if (dir == 3) {
      for (let i = bottom; i >= top; i--) {
        arr[i][left] = 1;
      }
      left++;
    }
    if (top == bottom || left == right) break;
    count++;
    dir = (dir + 1) % 4;
    if (count % 4 == 2 && count / 4 > 1) left++;
    else if (count % 4 == 0) right--;
    else if (count % 4 == 1 && count / 4 > 1) bottom--;
    else if (count % 4 == 3) top++;
  }
  return arr;
}

console.log(spiralize(5));
