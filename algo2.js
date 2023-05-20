/*
    given 2 arrays of numbers, return a list of numbers that are present in arr_2, but not in arr_1.

*/

// for each index in array 1 if 

gatherMissingNumbers = (arr_1, arr_2) => {
    index1 = 0;
    index2 = 0;
    list = [];
    while (index < arr_1.length) {
        if (arr_1[index] === array[index2]) {
            push(arr_2[index2])
            ++index1
        }
        else {
            ++index1
        }
    }
}

console.log(gatherMissingNumbers([1,2,3], [2,4,6]) === [4,6] ? 'pass' : 'fail'); // has some missing
console.log(gatherMissingNumbers([1,2,3], [1,2,3]) === [] ? 'pass' : 'fail'); // has no missing
console.log(gatherMissingNumbers([1,2,3], [4,5,6]) === [4,5,6] ? 'pass' : 'fail'); // has all missing