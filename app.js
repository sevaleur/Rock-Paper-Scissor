let letters = document.querySelectorAll('.letters li');
let roshambo = document.querySelector('.ro-sham-bo');
let userChoice = document.querySelectorAll('.userChoices img');
let paper = document.querySelector('.paper');
let rock = document.querySelector('.rock');
let roundNr = document.querySelector('.round');
let you = document.querySelector('.you');
let com = document.querySelector('.computer');
let comRock = document.querySelector('.comChoiceRock');
let comPaper = document.querySelector('.comChoicePaper');
let comScissor = document.querySelector('.comChoiceScissor');
let round = 1; 
let yourScore = 0; 
let computerScore = 0; 
let comChoice = [comRock, comPaper, comScissor];
let computer;

roundNr.innerText = round; 
you.innerText = yourScore++;
com.innerText = computerScore++;
roshambo.innerText = 'Pick below to begin!';

letters.forEach(letter => {
    letter.addEventListener('mouseover', () => {
        letter.classList.add('grow');
    });
    letter.addEventListener('mouseleave', () => {
        letter.classList.remove('grow');
    });
});

function computerChoice() {
    let random = Math.floor(Math.random()* 3);
    computer = comChoice[random];
};

function paperChoice(computer) {
    switch (computer) {
        case comChoice[0]:
            roundNr.innerText = round++; 
            you.innerText = yourScore++;
            roshambo.innerText = 'You win!';
            comRock.classList.add('comPick');
            break; 
        case comChoice[2]:
            roundNr.innerText = round++; 
            com.innerText = computerScore++;
            roshambo.innerText = 'You lost..';
            comScissor.classList.add('comPickScissor');
            break; 
        default: 
            roshambo.innerText = "It's a tie! Try again";
            comPaper.classList.add('comPick');
            break;
    };
};

function rockChoice(computer) {
    switch (computer) {
        case comChoice[2]:
            roundNr.innerText = round++; 
            you.innerText = yourScore++;
            roshambo.innerText = 'You win!';
            comScissor.classList.add('comPickScissor');
            break; 
        case comChoice[1]:
            roundNr.innerText = round++; 
            com.innerText = computerScore++;
            roshambo.innerText = 'You lost..';
            comPaper.classList.add('comPick');
            break; 
        default: 
            roshambo.innerText = "It's a tie! Try again";
            comRock.classList.add('comPick');
            break;
    };
};

function scissorChoice(computer) {
    switch (computer) {
        case comChoice[1]: 
            roundNr.innerText = round++; 
            you.innerText = yourScore++;
            roshambo.innerText = 'You win!';
            comPaper.classList.add('comPick');
            break; 
        case comChoice[0]: 
            roundNr.innerText = round++; 
            com.innerText = computerScore++;
            roshambo.innerText = 'You lost..';
            comRock.classList.add('comPick');
            break; 
        default: 
            roshambo.innerText = "It's a tie! Try again";
            comScissor.classList.add('comPickScissor');
            break;
    };
};

userChoice.forEach(choice => {
    choice.addEventListener('click', () => {
        comRock.classList.remove('comPick');
        comPaper.classList.remove('comPick');
        comScissor.classList.remove('comPickScissor');
        computerChoice();
        if (choice.className === 'rock') {
            rockChoice(computer);
        } else if (choice.className === 'paper') {
            paperChoice(computer);
        } else {
            scissorChoice(computer);
        };
    });
});
