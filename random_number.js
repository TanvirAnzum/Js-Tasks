/// guess a random number between 1-5 . comparing this with user and printing the difference



function guessTheNumber(num) {
    let random_number = Math.ceil(Math.random() * 5);
    // console.log(random_number);
    if(num > random_number) return 'You chose bigger.';
    else if(num < random_number) return 'You chose smaller.';
    else return 'You guessed it right!';
}

let ans = guessTheNumber(3);

console.log(ans);