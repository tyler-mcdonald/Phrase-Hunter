

let game = null;

document.querySelector('#btn__reset').addEventListener('click', function () {
    game = new Game();
    game.resetGame();
    game.startGame(); 
})

// /**
// Click event for keyboard display buttons
document.querySelector('#qwerty').addEventListener('click', function (e) {
    game.handleInteraction(e.target);
})
// */





// /**
document.addEventListener('keydown', function (e) {
    const keyboardButtons = document.querySelectorAll('#qwerty button');
    for (let button of keyboardButtons) {
        if (button.textContent === e.key) {
            game.handleInteraction(button);
        }
    }
});
//  */