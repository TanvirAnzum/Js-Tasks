const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;


let time = new Date();
console.log(time.getUTCHours());
console.log(time.getUTCMinutes());