let userInput = process.argv[2];

// steps
userInput = userInput.split(' ');
let newSentence = userInput.map(produceTransformation).join('');

console.log(newSentence);

// functions

function produceTransformation(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let firstChar = word[0];
    let secondChar = word[1];

    let transformedWord;

    if (vowels.includes(firstChar)) {
        transformedWord = word + 'way ';
        transformedWord = checkUpperCase(word, transformedWord);
    }

    if (!vowels.includes(firstChar) && !vowels.includes(secondChar)) {
        transformedWord = word.slice(2) + word.slice(0, 2) + 'ay ';
        transformedWord = checkUpperCase(word, transformedWord);
    }

    if (!vowels.includes(firstChar) && vowels.includes(secondChar)) {
        transformedWord = word.slice(1) + word[0] + 'ay ';
        transformedWord = checkUpperCase(word, transformedWord);
    }
    return transformedWord;
}

function checkUpperCase(original, newWord) {
    newWord = newWord.toLowerCase();
    if (original[0].toUpperCase() === original[0]) {
        return newWord[0].toUpperCase() + newWord.slice(1);
    } else {
        return newWord;
    }
}
