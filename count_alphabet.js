/// counting alphabet 
/// sample input: hello , output: h- 1, e - 1, l - 2, 0 -1 

function counting_alpha(user_input) {
    let arr = new Array(26).fill(0);
    user_input = user_input.toLowerCase();
    
    for(let i=0;i<user_input.length;i++) {
        let ascii = user_input.charCodeAt(i);
        arr[ascii - 97]++;
    }
    
    for(let i=0;i<26;i++) {
        if(arr[i] > 0) {
            console.log(String.fromCharCode(i+97) + " : " + arr[i]);
        }
    }
}

counting_alpha('hello');
counting_alpha('javascript');
