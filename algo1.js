/*
    Given a number, return a boolean indicating whether the number is even.
*/

isEven = (num) => {
    if(num % 2 === 0) {
        return(true)
    }
    else {
        return(false)
    }
}

console.log(isEven(2) ? 'pass' : 'fail'); 
console.log(!isEven(57) ? 'pass' : 'fail'); 
console.log(isEven(0) ? 'pass' : 'fail'); 