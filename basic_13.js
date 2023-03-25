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

algo3(array3);
