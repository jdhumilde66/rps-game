let userScore = 0;
let computerScore = 0;

// ui elements
let message = document.querySelector('.message'),
  rockInput = document.querySelector('.rock'),
  paperInput = document.querySelector('.paper'),
  scissorInput = document.querySelector('.scissor'),
  uScore = document.querySelector('.user-score'),
  cScore = document.querySelector('.computer-score'),
  restart = document.querySelector('.restart');

// rock, paper, scissor
function getComputerChoice() {
  let rsp = ['rock', 'paper', 'scissor'];
  let randomNum = Math.floor(Math.random() * 3);

  return rsp[randomNum];
}

// load event listeners
loadEventListeners();

function loadEventListeners() {
  rockInput.addEventListener('click', userChoice);
  paperInput.addEventListener('click', userChoice);
  scissorInput.addEventListener('click', userChoice);
}

function userChoice(e) {
  let choice = getComputerChoice();

  game(e.target.value, choice);

  e.preventDefault();
}

function win(user, computer) {
  userScore++;
  if (userScore === 5) {
    rockInput.disabled = true;
    paperInput.disabled = true;
    scissorInput.disabled = true;
    setMessage('User wins!');
    restart.hidden = false;
  }
  uScore.innerHTML = userScore;
  cScore.innerHTML = computerScore;
}

function lose() {
  computerScore++;
  if (computerScore === 5) {
    rockInput.disabled = true;
    paperInput.disabled = true;
    scissorInput.disabled = true;
    setMessage('Computer wins!');
    restart.hidden = false;
  }
  uScore.innerHTML = userScore;
  cScore.innerHTML = computerScore;
}

function draw() {
  uScore.innerHTML = userScore;
  cScore.innerHTML = computerScore;
}

function setMessage(msg) {
  message.textContent = msg;
}

function game(userPick, compPick) {
  switch (userPick + compPick) {
    case 'rockscissor':
    case 'scissorpaper':
    case 'paperrock':
      console.log('You win!');
      win();
      break;
    case 'scissorrock':
    case 'paperscissor':
    case 'rockpaper':
      console.log('You lose!');
      lose();
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorscissor':
      console.log('Draw!');
      draw();
      break;
  }
}

function reset() {
  window.location.reload();
}

restart.addEventListener('click', reset);

window.addEventListener('load', function () {
  rockInput.disabled = false;
  paperInput.disabled = false;
  scissorInput.disabled = false;
});
