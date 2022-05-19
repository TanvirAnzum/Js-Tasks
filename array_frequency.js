let array = [1,1,1,1,2,2,2,3,3,4,5,5,6,7,7,8,9,9,9,9];

/// we have to take a resulting array. 

let frequency = new Array(10).fill(0);

// the size of array is 10 beacuse in our input array the min value is 1 and max is 9.  

for(let i=0;i<array.length;i++) {
    frequency[array[i]]++;
}

//now printing the frequency 

for(let i=1;i<frequency.length;i++) console.log(frequency[i]);