//counting word in a sentence
/// sample input: I hate it. sample output: 3


///counting with split
function count_split(sentence) {
    let arr = sentence.split(" ");
    return arr.length;
}

///counting with for loops

function count_loop(sentence) {
    let count = 0;
    for(let i=0;i<sentence.length;i++) {
        if(sentence[i] == ' ') count++;
    }
    return count + 1;
}

console.log(count_split('i hate it that i love it'));
console.log(count_loop('i hate it that i love it'));