/*
str1 = i love it,
str2 = i hate it

mysong(1) -> i love it
mysong(2) -> i love that i hate it
mysong(3) -> i love that i hate that i love it
mysong(4) -> i love that i hate that i love that i hate it

*/

let str1 = 'i love it';
let str2 = 'i hate it';

function mysong(n) {
    let output = '';
    if(n==1) return str1;
    for(let i=1;i<=n;i++) {
        if(i%2 != 0 && i!=n) output += replace(str1);
        else if(i%2!=0 && i==n) output += str1;
        else if(i%2==0 && i!=n) output += replace(str2);
        else output += str2;
    }
    return output;
}

function replace(str) {
   let arr = str.split(' ');
   for(let i=0;i<arr.length;i++) {
       if(arr[i] == 'it') arr[i] = 'that ';
   } 
   let ans = arr.join(' ');
   return ans;
}

console.log(mysong(1));
console.log(mysong(2));
console.log(mysong(5));
console.log(mysong(10));