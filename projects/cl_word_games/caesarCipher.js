let userText = process.argv[2];
let userNumber = parseInt(process.argv[3]);

const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];

const ciphered = userText
    .split('')
    .map((el) => {
        if (el === ' ') return ' ';
        let index = alphabet.findIndex((char) => el.toLowerCase() === char);
        let newIndex = index + parseInt(userNumber);
        while (newIndex > alphabet.length) {
            newIndex = newIndex - 26;
        }
        while (newIndex < 0) {
            newIndex = newIndex + 26;
        }
        return el === el.toUpperCase()
            ? alphabet[newIndex].toUpperCase()
            : alphabet[newIndex];
    })
    .join('');

console.log(ciphered);
