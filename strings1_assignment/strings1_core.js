
let phrase = " Pl ayTha tF u nkyM usi c "

const removeBlanks = (phrase) => {
    let newPhrase = ''
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] !== ' ') {
            newPhrase += phrase[i];
        }
    }
    console.log(newPhrase);
    return newPhrase;
}

removeBlanks(phrase);




const digits = "0s1a3y5w7h9a2t4?6!8?0"

const getDigits = (string) => {
    let newString = '';
    for (let i = 0; i < digits.length; i++) {
        if (!isNaN(Number(string[i])) ) {
            newString += string[i];
        }
    }
    console.log(newString)
}

getDigits(digits);


const value = " there's no free lunch - gotta pay yer way. "

const stringToAcronym = (string) => {
    let newString = ''
    let array = string.split(' ')
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== '' && array[i][0].toUpperCase() !== undefined) {
            newString += array[i][0].toUpperCase();
        }
    }
    console.log(newString);
}

stringToAcronym(value);


const spaces = 'Hello world !'

const countNonSpaces = (string) => {
    let count = 0
    for (let i = 0; i<string.length; i++) {
        if (string[i] !== ' ') {
            count++
        }
    }
    console.log(count);
}

countNonSpaces(spaces);


const strings = ['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello']

const removeShorterStrings = (array, value) => {
    newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length >= value) {
            newArray.push(array[i]);
        }
    }
    console.log(newArray);
}

removeShorterStrings(strings, 4);
