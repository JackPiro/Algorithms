function algo1( x = 1 ) {
    while ( x < 255 ) {
        console.log(x)
        x = x + 1;
    }
}
// console.log(algo1)

let algo2 = () => {
    let numbersList = [];
    for ( i = 0; i <= 255; i++) {
        numbersList.push(i);
        let sum =+ numbersList[i];
        console.log(numbersList[i]);
        console.log(sum);
    }
}

let array3 = [1,2,3,4,5,5,4,3,2,1,6]
//find and print largest element in an array
let algo3 = (array) => {
    let val = 0;
    let index = 0;
    while (index < array.length) {
        if (val >= array[index]) {
            index = index + 1;
        }
        else {
            val = array[index];
            index = index + 1;
        }
    }
    console.log(val);
}


let algo4 = ( x = 1 ) => {
    let array = []
    while(x <= 255) {
        if(x / 2 && x % 2 === 0) {
            x = x + 1;
            array.push(x);
        }
        else {
            array.push(x);
            x = x +2;
        }
    }
    console.log(array);
}


let algo5 = (array, y) => {
    let index = 0;
    while(index < array.length) {
        if( y < array[index] ) {
            console.log(array[index])
            index = index + 1;
        }
        else {
            index = index + 1;
        }
    }
}



let array6 = [2,-2,3,4,5,5,-4,3,2,2,7,8];

let algo6 = (array) => {
    let index = 0;
    let min
    let max
    let average = 0;
    let sum = 0;
    while(index < array.length) {
        sum = sum + array[index];
        if(min < array[index]) {
            max = array[index]
            index = index + 1;
        }
        else {
            min  = array[index]
            index = index + 1;
        }
    }
    average = sum / array.length
    console.log(average);
    console.log(min);
    console.log(max);
}




let array7 = [2,-2,3,4,5,5,-4,3,2,2,7,8];
let algo7 = (array) => {
    let index = 0;
    while(index < array.length) {
        if(array[index] < 0) {
            array[index] = "dojo"
            index = index + 1;
        }
        else{
            index = index + 1;
        }
    }
    console.log(array)
}


let algo8 = () => {
    let x = 0;
    while (x <= 255) {
        if (x % 2 !== 0) {
            console.log(x);
            x = x + 1;
        }
        else {
            x = x + 1;
        }
    }
}

let array9 = [2,-2,3,4,5,5,-4,3,2,2,7,8];
let algo9 = (array) => {
    let index = 0
    while (index < array.length) {
        console.log(array[index])
        index = index + 1;
    }
}


algo9(array9);
