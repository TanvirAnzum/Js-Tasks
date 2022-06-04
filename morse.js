decodeMorse = function (morseCode) {
  var ref = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
    "...---...": "SOS",
    "/": " ",
    "-.-.--": "!",
    ".-.-.-": ".",
    "--..--": ",",
  };
  let arr = morseCode.split("   ");

  let output = "";
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].split(" ");
    let flag = false;
    for (let j = 0; j < temp.length; j++) {
      if (!only_space(temp[j])) {
          output += ref[temp[j]];
          flag = true;
      }
    }
    if (i != arr.length - 1 && flag) {
        output += " ";
        flag = false;
    }
  }

  return output.toUpperCase();
};

function only_space(str) {
  for (l in str) {
    if (l != " ") return false;
  }
  return true;
}

console.log(decodeMorse("       ···−−−···         .         .       .   "));
