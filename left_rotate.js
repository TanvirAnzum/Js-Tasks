///sample input: [1,2,3,4,5]
///sample output: [2,3,4,5,1]

function left_rotate(arr) {
    let temp;
    for(let i=0;i<arr.length - 1;i++) {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}

console.log(left_rotate([2,3,4,5,6,7,8]));