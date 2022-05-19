let choice = prompt('There will be 10 rounds. You have to choose between even or odd numbers. The numbers will between 1 to 6. for odd type 1 and for even type 2');

// while(choice != 1 || choice != 2 ) choice;

//we have to generate a random number between 1 to 6
let max = 6;
let min = 1;

let even =0, odd = 0;
let rounds = 10;
while(rounds--) {
    let random_number = Math.floor(Math.random() * (max - min + 1) + min);
    if(random_number %2 == 0) even += random_number;
    else odd += random_number;
    console.log(random_number);
}

let ans;
if(odd>even) ans = odd;
else if(even>odd) ans = even;
else ans = 'tie';

let user;

if(choice == 1) user = odd;
else user = even;

if(ans == 'tie') alert("Summation of even numbers: " + even + " Summation of odd numbers: " + odd + " .So match tied");
else if(user == ans) alert("Summation of even numbers: " + even + " Summation of odd numbers: " + odd + " .So You are the Champion!");
else alert("Summation of even numbers: " + even + " Summation of odd numbers: " + odd + " .Sorry! You have lost the game!");