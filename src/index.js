import './scss/style.scss';
import logo from './img/logo.png';
import Game from './js/game';

// Game state
let onGame = false;
// Logo
let gLogo = new Image(250, 70);
gLogo.src = logo;
let logoBlock = document.getElementById('logo');
logoBlock.appendChild(gLogo);
// Menu
let menu = document.getElementById('menu');
// User input
let input = document.getElementById('userInput');
input.value = 'USER111';
input.onclick = () => {
    input.value = '';
};
input.onblur = () => {
    input.value = input.value ? input.value : 'USER111';
};
// get canvas
let canvas = document.getElementById('gameCanvas');

function StartGame() {
    menu.style.display = 'none';
    canvas.style.display = 'block';
    // Init game object
    let game = new Game(canvas, input.value);
    // Start game loop
    game.start();
}

// Start game from keyboeard
function startEnter(e) {
    let code = e.which || e.keyCode;
    if (code == '13' && !onGame) {
        StartGame();
        onGame = true;
    }
}

// Start game click
let startBtn = document.getElementById('startBtn');
startBtn.onclick = () => {
    StartGame();
    onGame = true;
};


window.addEventListener('keydown', startEnter);