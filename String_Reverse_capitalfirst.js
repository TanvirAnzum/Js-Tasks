/// sample input output
/// input: haPpy output: YpPah

let string = "haPpy";

function reverse(str) {
  let reversed_str = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if(i == str.length - 1) {
        let ascii = str.charCodeAt(i);
        console.log(ascii);
        if(ascii>90) reversed_str += String.fromCharCode(ascii - 32);
    }
    else reversed_str += str[i];
  }
  return reversed_str;
}

console.log(reverse(string));
