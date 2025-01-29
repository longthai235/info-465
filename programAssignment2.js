const readline = require('readline');

// Interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Store array of integers
const numbers = [];

// Function to check if the product of any two numbers equals a third number
function checkCondition(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const product = numbers[i] * numbers[j];
            if (numbers.includes(product)) {
                return `Condition is met: ${numbers[i]} x ${numbers[j]} = ${product}`;
            }
        }
    }
    return 'Condition was not met';
}

// Function to prompt the user for input
function getUserInput() {
    rl.question('Enter an integer or "q" to quit: ', (input) => {
        // Check if the user wants to quit
        if (input.toLowerCase() === 'q') {
            rl.close();
            return;
        }

        // Parse the input as an integer
        const number = parseInt(input, 10);

        // Validate the input
        if (isNaN(number)) {
            console.log('Error: Please enter a valid integer or "q" to quit.');
        } else {
            // Add the number to the array
            numbers.push(number);
            console.log(`You entered: ${number}`);
        }

        getUserInput();
    });
}

// Closing the readline interface
rl.on('close', () => {
    // Display all entered numbers
    console.log('Numbers entered:', numbers.join(', '));
    if (numbers.length >= 3) {
        console.log(checkCondition(numbers)); // Check and display the condition
    } else {
        console.log('At least 3 integers are required to check the condition.');
    }
    console.log('Program terminated.');
});

getUserInput();
