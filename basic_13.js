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

let array5 = [1,2,3,4,5,5,4,3,2,1,6];
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


algo5(array5, 4)

