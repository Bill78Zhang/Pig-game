/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var player1 = {
    totalScore: 0,
    currentScore: 0,
}

var player2 = {
    totalScore: 0,
    currentScore: 0,
};

var currentPlayer = 0;
var roleDice = document.getElementsByClassName("btn-roll");
var btnHold = document.getElementsByClassName('btn-hold');
var current0 = document.getElementById('current-0');
var current1 = document.getElementById('current-1');
var score0 = document.getElementById('score-0');
var score1 = document.getElementById('score-1');
var dicImg = document.getElementsByClassName('dice');
var div = document.getElementsByTagName("div");



btnHold[0].addEventListener("click", () => {
    if (currentPlayer === 0) {
        currentPlayer = 1;
        player1.totalScore = player1.totalScore + player1.currentScore;
        player1.currentScore = 0;
        current0.textContent = 0
        score0.textContent = player1.totalScore;

    } else {
        currentPlayer = 0;
        player2.totalScore = player2.totalScore + player2.currentScore;
        player2.currentScore = 0;
        current1.textContent = 0;
        score1.textContent = player2.totalScore;
    }
}, false);

roleDice[0].addEventListener("click", () => {
    if (currentPlayer === 0) {
        let newScore = parseInt(Math.random() * 6);
        if (newScore === 0) {
            player1.currentScore = 0;
            current0.textContent = 0;
        } else {
            player1.currentScore = player1.currentScore + newScore;
            current0.textContent = player1.currentScore;
        }
    }

    if (currentPlayer === 1) {
        let newScore = parseInt(Math.random() * 6);
        if (newScore === 0) {
            player2.currentScore = 0;
            current1.textContent = 0;
        } else {
            player2.currentScore = player2.currentScore + newScore;
            current1.textContent = player2.currentScore;
        }
    }

}, false);