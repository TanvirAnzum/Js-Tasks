function toupper(str) {
    let output = '';
    for(let i=0;i<str.length;i++) {
        let ascii = str.charCodeAt(i);
        if(ascii > 90) output+= String.fromCharCode(ascii - 32);
        else output+= str[i];
    }
    return output;
}

function tolower(str) {
    let output = '';
    for(let i=0;i<str.length;i++) {
        let ascii = str.charCodeAt(i);
        if(ascii < 90) output+= String.fromCharCode(ascii + 32);
        else output+= str[i];
    }
    return output;
}

console.log(toupper('JavaScript'));
console.log(tolower('JaVaScriPt'));