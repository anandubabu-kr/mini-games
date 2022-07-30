// Accessing elements

const choices = document.querySelectorAll('button');
const displayComputer = document.getElementById('display__computer')
const displayUser = document.getElementById('display__user')
const displayResult = document.getElementById('result')
let userChoice
let computerChoice;


choices.forEach(choice => choice.addEventListener('click', e => {
    userChoice = e.target.id
    displayUser.innerHTML = userChoice
    generateComputerChoice()
}))

function generateComputerChoice() {
    const randumNumber = Math.floor(Math.random() * 3) + 1
    switch (randumNumber) {
        case 1: computerChoice = 'rock'
            break;
        case 2: computerChoice = 'scissors'
            break;
        case 3: computerChoice = 'paper'
            break;
        default: break;
    }
    displayComputer.innerHTML = computerChoice
    doValidation()
}

function doValidation() {
    let result;
    if (computerChoice === userChoice) {
        result = 'It\'s a draw !!'
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "Computer won 😯\n Hard luck"
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        result = "You  won 🤩\n "
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "Computer won 😯\n Hard luck"
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        result = "You  won 🤩\n "
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "Computer won 😯\n Hard luck"
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        result = "You  won 🤩\n "
    }
    displayResult.innerHTML = result
}