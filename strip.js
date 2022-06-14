function solution(input, markers) {
  let arr = input.split("\n");
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    let temp = "";
    for (let j = 0; j < val.length; j++) {
      if (find(val[j], markers)) break;
      else temp += val[j];
    }
    arr[i] = temp;
  }

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    let subarr = val.split("");
    while (subarr[subarr.length - 1] == " ") subarr.pop();
    arr[i] = subarr.join("");
  }
  arr = arr.join("\n");
  return arr;
}

function find(x, markers) {
  if (markers.indexOf(x) != -1) return true;
  return false;
}

console.log(
  solution("apples, plums % and=bananas\npears\noranges !applesauce", [
    "%",
    "!",
  ])
);

console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]));
