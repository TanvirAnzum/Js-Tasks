///sample input: javascript
///sample output: 8 that means even. js er life set :p
///there are many ways to solve this problem. currently i am using frequency technique! 

// as there  are 26 characters in english alphabet

function single_or_not(user_input) {
    let arr = new Array(26).fill(0);
    user_input = user_input.toLowerCase();
    
    for(let i=0;i<user_input.length;i++) {
        let ascii = user_input.charCodeAt(i);
        arr[ascii - 97]++;
    }
    
    let count = 0;
    
    for(let i=0;i<26;i++) if(arr[i]==1) count++;
    
    if(count%2 == 0) return "Tomar Life Set!!";
    else return "Tumi Single Thekei Morba!!";
}

let fate = single_or_not('Tanvir Anzum');

console.log(fate);


