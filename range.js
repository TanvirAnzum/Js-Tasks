function solution(list) {
  let output = "";
  for (let i = 0; i < list.length; i++) {
    let subarr = new Array();
    for (let j = i; j < list.length; j++) {
      if (list[j] + 1 == list[j + 1]) subarr.push(list[j]);
      else {
        subarr.push(list[j]);
        i = j;
        break;
      }
    }
    if (subarr.length > 2) {
      min = subarr[0];
      max = subarr[subarr.length - 1];
      let x = min + "-" + max + ",";
      output += x;
    } else if (subarr.length > 1) output += subarr.join(",") + ",";
    else output += subarr[0] + ",";
  }
  output = output.slice(0, -1);
  return output;
}

console.log(
  solution([
    -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
    19, 20,
  ])
);
