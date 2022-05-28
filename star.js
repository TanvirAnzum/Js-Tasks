///sample input: 15
/// sample output: 1 2 3 4 * 6 7 8 9 ** 11 12 13 14 ***  .... 

function calculate(range) {
    let arr = new Array(range);
    for(let i=1;i<=range;i++) {
        if(i%5==0) arr[i-1] = printing_star(i/5);
        else arr[i-1] = i;
    }
    return arr;
}

function printing_star(n) {
    let str = '';
    while(n--) str += '*';
    return str;
}

console.log(calculate(100));

/// sample output: 1 2 3 4 * 6 7 8 9 ** 11 12 13 14 ***  .... 

// function calc(range) 
// {
//     for(let i=1;i<=range;i++) {
//         if(i%5!=0) console.log(i);
//         else {
//             let x = i/5;
//             for(let j=0;j<x;j++) console.log('*');
//         }
//     }
// }

/// this problem can be solved only using console log too.  