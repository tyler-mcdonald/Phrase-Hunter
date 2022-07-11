let game = null;

/** Click event for start button */
document.querySelector('#btn__reset').addEventListener('click', function () {
    game = new Game();
    game.resetGame();
    game.startGame(); 
})


/* Click event for keyboard display */ 
document.querySelector('#qwerty').addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
})


/* Keydown event for keyboard display */ 
document.addEventListener('keydown', function (e) {
    const keyboardButtons = document.querySelectorAll('#qwerty button');
    for (let button of keyboardButtons) {
        if (button.textContent === e.key && !button.disabled) {
            game.handleInteraction(button);
        }
    }
});