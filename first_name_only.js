///sample input: Tanvir Anzum
/// sample output: Tanvir

function first_name(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] == " ") break;
    output += input[i];
  }
  return output;
}


console.log(first_name('John Smith'));

