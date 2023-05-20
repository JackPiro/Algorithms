//push front

let arr = [1, 2, 3, 4, 5, 6, 7, 8]

const pushFront = (arr, num) => {
    let arr1 = [num];
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        let newArr = [...arr1, temp];
        arr1 = newArr;
        console.log(newArr);
    }
}

// pushFront(arr, 6);


//pop front

const popFront = (array) => {
    console.log(array[0])
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i+1];
    }
    array.pop();
    console.log(array)
}

// popFront(arr);

const insertAt = (array, index, val) => {
    for (let i = array.length-1; i > array[index]; i--) {
        array[i] = arr[i - 1];
        console.log('running')
        if (i === index) {
            array[i] = val
            console.log(array)
        }
    }
    console.log(array)
}

insertAt(arr, 2, 100);
