//setup
const choices = ['scissors', 'rock', 'paper'];

//input
let userInput = process.argv[2]?.toLowerCase();

//steps
validateInput(userInput, choices);

const computerChoice = generateComputerChoice(choices);

determineWinner(userInput, computerChoice);

//functions
function validateInput(input, options) {
    if (!input) {
        console.log('Please provide your choice!');
        process.exit();
    }
    if (!options.includes(input)) {
        console.log('Not a valid input!');
        process.exit();
    }
}

function generateComputerChoice(options) {
    return options[Math.floor(Math.random() * options.length)];
}

function determineWinner(userChoice, computerChoice) {
    console.log(
        `You chose ${userInput} and the computer chose ${computerChoice}.`
    );
    if (userChoice === computerChoice) {
        console.log("It's a tie");
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log('You win!');
    } else {
        console.log('Computer wins!');
    }
}
