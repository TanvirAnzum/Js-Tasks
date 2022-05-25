function min(...arr) {
    let min = Number.MAX_SAFE_INTEGER;
    for(let i=0;i<arr.length;i++) {
        if(arr[i]<min) min = arr[i];
    }
    return min;
}

function max(...arr) {
    let max = Number.MIN_SAFE_INTEGER;
    for(let i=0;i<arr.length;i++) {
        if(arr[i]>max) max = arr[i];
    }
    return max;
}

console.log(min(192,34,56,76,7,-34,-456));
console.log(max(192,34,56,76,7,-34,-456));