/// sample input: funtion(num1, num2, plus)
/// sample output: return num1 + num2

/// let say, out program can calculate 5 operation: plus, minus, multplication, division, modulas.

function calculator(num1, num2 , operation) {
    operation = operation.toLowerCase();
    if(operation == 'plus') return num1 + num2;
    else if(operation == 'minus') return num1 - num2;
    else if(operation == 'multiplication') return num1 * num2;
    else if(operation == 'division') return num1/num2;
    else if(operation == 'modulas') return num1%num2;
    else return 'invalid operation';
}

console.log(calculator(25,20,'PLus'));
console.log(calculator(25,20,'minus'));
console.log(calculator(25,20,'MultiplicatioN'));
console.log(calculator(25,20,'division'));
console.log(calculator(25,20,'Modulas'));
console.log(calculator(25,20,'log10'));