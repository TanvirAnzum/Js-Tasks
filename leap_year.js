///a function to check if the year is leapyear or not


function is_leapYear(year) {
    if(year%400 == 0) return true;
    else if(year%100 == 0) return false;
    else if(year%4 == 0) return true;
    else return false;
}

console.log(is_leapYear(2004));
console.log(is_leapYear(2022));
console.log(is_leapYear(2012));
console.log(is_leapYear(1994));
console.log(is_leapYear(3200));
console.log(is_leapYear(1900));