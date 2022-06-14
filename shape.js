function towerBuilder(nFloors) {
  let ans = new Array();
  let range = nFloors + (nFloors - 1);
  for (let i = 1; i <= nFloors; i++) {
    let str = "";
    let x = i + i - 1;
    let space = range - x;
    let lower = parseInt(space / 2);
    let upper = lower + x;
    console.log(space);
    console.log(lower);
    console.log(upper);
    for (let j = 1; j <= range; j++) {
      if (j <= lower || j > upper) str += " ";
      else str += "*";
    }
    ans.push(str);
  }
  return ans;
}

console.log(towerBuilder(5));
